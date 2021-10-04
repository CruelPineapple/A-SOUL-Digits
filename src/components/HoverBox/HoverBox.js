import "./HoverBox.css";
import imgAva from "../../assets/1.webp";
import imgBella from "../../assets/2.webp";
import imgCarol from "../../assets/3.webp";
import imgDiana from "../../assets/4.webp";
import imgEileen from "../../assets/5.webp";
import React from "react";
import axios from "axios";

class HoverBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenClass: "hide",
      bgColor: props.name,
      followers: undefined,
      changeFollow: "",
      showNumClass: "hide-nums",
      yesterday: undefined,
      today: undefined,
      showDetail: false
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.toggleNum = this.toggleNum.bind(this);
  }
  get img() {
    const nameObj = {
      ava: imgAva,
      bella: imgBella,
      carol: imgCarol,
      diana: imgDiana,
      eileen: imgEileen,
    };
    return nameObj[this.props.name];
  }

  get yesterdayInc(){
    return this.state.today - this.state.yesterday
  }

  get followNum(){
    if(this.state.showDetail){
      return `粉丝数：${this.state.followers}`
    }else{
      return `粉丝数：${(this.state.followers/10000).toFixed(2)}万`
    }
  }

  handleEnter() {
    this.getFans().then(()=>{
      if(this.state.changeFollow !== "+0"){
        this.setState({
          showNumClass: "show-nums"
        })
        setTimeout(()=>{
          this.setState({
            showNumClass: "hide-nums"
          })
        }, 2000)
      }
    })
    this.setState({
      hiddenClass: "show"
    });

  }

  handleLeave() {
    this.setState({
      hiddenClass: "hide",
    });
  }

  toggleNum(){
    this.setState((prev)=>{
      return {
        showDetail: !prev.showDetail
      }
    })
  }

  getToday(){
    axios.get("api/asd/t",{
      params:{
        name: this.props.name
      }
    }).then((res)=>{
      this.setState({
        today: res.data.today
      })
    }).catch((e)=>{
      console.log(e)
    })
  }

  getYesterday(){
    axios.get("api/asd/y",{
      params:{
        name: this.props.name
      }
    }).then((res)=>{
      this.setState({
        yesterday: res.data.yesterday
      })
    }).catch((e)=>{
      console.log(e)
    })
  }

  getFans(){
    let promise = new Promise((resolve, reject)=>{
      axios.get("api/asd/",{
        params:{
          vmid: this.props.info.vmid
        }
      }).then((res)=>{
        //console.log(res)
        let followers = res.data.followers
        let changeStr = ""
        if(this.state.followers){
          let change = followers - this.state.followers
          changeStr = ""
          if(change >= 0){
            changeStr += "+"
          }
          changeStr += change.toString()
        }else{
          changeStr = "+0"
        }
        this.setState({
          followers: followers,
          changeFollow: changeStr,
        })
        resolve()
      }).catch((e)=>{
        console.error(e)
        reject()
      })
    })
    return promise
  }

  componentDidMount(){
    this.getFans();
    this.getYesterday();
    this.getToday();
  }

  render() {
    return (
      <div
        onMouseLeave={this.handleLeave}
        onMouseEnter={this.handleEnter}
        className="outer-box"
      >
        <div
          className={this.state.hiddenClass + " " + this.state.bgColor}
        >
            <div onClick={this.toggleNum} className={"nums"}>{this.followNum}
              <div className={`float-nums ${this.state.showNumClass}`}>{this.state.changeFollow}</div>
            </div>
            <div className={"nums"}>昨日涨粉：{this.yesterdayInc}</div>
            <div className={"nums"}>今日涨粉：{this.state.followers-this.state.today}</div>
        </div>
        <div className="bfc-box">
          <div className="name-bar">{this.props.info.bar}</div>
          <img className="image" src={this.img} alt=""></img>
        </div>
      </div>
    );
  }
}

export default HoverBox;
