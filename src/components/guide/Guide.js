import React from "react";
import pic from "../../assets/guide.png";
import "./Guide.css";

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuide: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter() {
    this.setState({
      showGuide: true,
    });
  }

  handleLeave() {
    this.setState({
      showGuide: false,
    });
  }

  get showClass() {
    if (this.state.showGuide) {
      return "show-guide";
    } else {
      return "hide-guide";
    }
  }

  render() {
    return (
      <div className="guide">
        <img
          onMouseEnter={this.handleEnter}
          onMouseLeave={this.handleLeave}
          className="img"
          src={pic}
          alt=""
        ></img>
        <div className={this.showClass}>
          <span>每次展开信息的时候会刷新</span>
          <span>点一下粉丝数可以详细显示</span>
          <span>直接右键粉丝数复制</span>
          <span>本周增长表示前七日增长，不包括今日</span>
        </div>
      </div>
    );
  }
}

export default Guide;
