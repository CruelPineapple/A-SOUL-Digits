import "./App.css";
import Title from "./components/title/title";
import HoverBox from "./components/HoverBox/HoverBox";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      A: {
        name: "ava",
        bar: "向晚AVA",
        vmid: 672346917,
      },
      B: {
        name: "bella",
        bar: "贝拉BELLA",
        vmid: 672353429,
      },
      C: {
        name: "carol",
        bar: "珈乐CAROL",
        vmid: 351609538,
      },
      D: {
        name: "diana",
        bar: "嘉然DIANA",
        vmid: 672328094,
      },
      E: {
        name: "eileen",
        bar: "乃琳EILEEN",
        vmid: 672342685,
      },
    };
  }

  componentDidMount() {
    
  }

  render() {
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
