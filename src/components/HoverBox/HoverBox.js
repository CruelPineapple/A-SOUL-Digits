import "./HoverBox.css";
import MemberImg from "./img";
import React from "react";
import { getFans, getLastweek, getToday, getYesterday } from "./api";

class HoverBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenClass: "hide",
      followers: undefined,
      changeFollow: "",
      showNumClass: "hide-nums",
      yesterday: undefined,
      today: undefined,
      showDetail: false,
      lastweek: undefined,
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.toggleNum = this.toggleNum.bind(this);
  }

  get bgColor() {
    return this.props.name;
  }

  get yesterdayInc() {
    return this.state.today - this.state.yesterday;
  }

  get followNum() {
    if (this.state.showDetail) {
      return `粉丝：${this.state.followers}`;
    } else {
      return `粉丝：${(this.state.followers / 10000).toFixed(2)}万`;
    }
  }

  get weeklyInc() {
    return this.state.today - this.state.lastweek;
  }

  handleEnter() {
    this.getFans().then(() => {
      if (this.state.changeFollow !== "+0") {
        this.setState({
          showNumClass: "show-nums",
        });
        setTimeout(() => {
          this.setState({
            showNumClass: "hide-nums",
          });
        }, 2000);
      }
    });
    this.setState({
      hiddenClass: "show",
    });
  }

  handleLeave() {
    this.setState({
      hiddenClass: "hide",
    });
  }

  toggleNum() {
    this.setState((prev) => {
      return {
        showDetail: !prev.showDetail,
      };
    });
  }

  getToday() {
    getToday(this.props.name)
      .then((res) => {
        this.setState({
          today: res.data.today,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getYesterday() {
    getYesterday(this.props.name)
      .then((res) => {
        this.setState({
          yesterday: res.data.yesterday,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getLastweek() {
    getLastweek(this.props.name)
      .then((res) => {
        this.setState({
          lastweek: res.data.lastweek,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getFans() {
    let promise = new Promise((resolve, reject) => {
      getFans(this.props.info.vmid)
        .then((res) => {
          //console.log(res)
          let followers = res.data.followers;
          let changeStr = "";
          if (this.state.followers) {
            let change = followers - this.state.followers;
            changeStr = "";
            if (change >= 0) {
              changeStr += "+";
            }
            changeStr += change.toString();
          } else {
            changeStr = "+0";
          }
          this.setState({
            followers: followers,
            changeFollow: changeStr,
          });
          resolve();
        })
        .catch((e) => {
          console.error(e);
          reject();
        });
    });
    return promise;
  }

  componentDidMount() {
    this.getFans();
    this.getYesterday();
    this.getToday();
    this.getLastweek();
  }

  render() {
    return (
      <div
        onMouseLeave={this.handleLeave}
        onMouseEnter={this.handleEnter}
        className="outer-box"
      >
        <div className={`${this.state.hiddenClass} ${this.bgColor}`}>
          <div onClick={this.toggleNum} className={"nums"}>
            {this.followNum}
            <div className={`float-nums ${this.state.showNumClass}`}>
              {this.state.changeFollow}
            </div>
          </div>
          <div className={"nums"}>
            今日增长：{this.state.followers - this.state.today}
          </div>
          <div className={"nums"}>昨日增长：{this.yesterdayInc}</div>
          <div className={"nums"}>本周增长：{this.weeklyInc}</div>
        </div>
        <div className="bfc-box">
          <div className="name-bar">{this.props.info.bar}</div>
          <MemberImg name={this.props.name} />
        </div>
      </div>
    );
  }
}

export default HoverBox;
