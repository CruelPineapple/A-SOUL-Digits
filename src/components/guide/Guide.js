import React, { useState } from "react";
import pic from "../../assets/guide.png";
import "./Guide.css";

function Guide(){

  const [showGuide, setShowGuide] = useState(false)

  function className(){
    if (showGuide) {
      return "show-guide";
    } else {
      return "hide-guide";
    }
  }

  return (
    <div className="guide-logo">
      <img
        onMouseEnter={()=>setShowGuide(!showGuide)}
        onMouseLeave={()=>setShowGuide(!showGuide)}
        className="img"
        src={pic}
        alt=""
      ></img>
      <div className={className()+' guide'}>
        <span>每次展开信息的时候会刷新</span>
        <span>点一下粉丝数可以详细显示</span>
        <span>直接右键粉丝数复制</span>
        <span>本周增长表示前七日增长，不包括今日</span>
      </div>
    </div>
  );
}

export default Guide;
