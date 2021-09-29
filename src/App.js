
import "./App.css";
import Title from "./components/title/title";
import HoverBox from "./components/HoverBox/HoverBox";
import React from "react";
// import axios from "axios";
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      A: {
        name: "ava",
        bar: "向晚AVA",
        data:{}
      },
      B: {
        name: "bella",
        bar: "贝拉BELLA",
        data:{}
      },
      C: {
        name: "carol",
        bar: "珈乐CAROL",
        data:{}
      },
      D: {
        name: "diana",
        bar: "嘉然DIANA",
        data: {}
      },
      E: {
        name: "eileen",
        bar: "乃琳EILEEN",
        data: {}
      }
    }
  }

  componentDidMount(){
    // axios.get("api/x/relation/stat",{
    //   params:{
    //     vmid: 672328094
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // }).catch((e)=>{
    //   console.error(e)
    // })
    // var xhr = new XMLHttpRequest();
    // xhr.open("get","api/x/relation/stat?vmid=672328094",true);
    // xhr.send();
    // xhr.onreadystatechange = function(e){
    //   console.log(xhr.readyState)
    //   if(xhr.readyState === 4&&xhr.status === 200){
    //     console.log(xhr.responseText)
    //   }
    // }

  }

  render(){
    return (
      <div className="App">
        <Title text="A-SOUL Digits"></Title>
        <div className="hover-box-container">
            <HoverBox name="ava" info={this.state.A}></HoverBox>
            <HoverBox name="bella" info={this.state.B}></HoverBox>
            <HoverBox name="carol" info={this.state.C}></HoverBox>
            <HoverBox name="diana" info={this.state.D}></HoverBox>
            <HoverBox name="eileen" info={this.state.E}></HoverBox>
          </div>
      </div>
    );
  }
}

export default App;
