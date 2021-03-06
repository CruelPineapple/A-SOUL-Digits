import "./App.css";
import Title from "./components/title/title";

import Guide from "./components/guide/Guide"
import BoxList from "./components/BoxList/BoxList";
import React from "react";

const infoList = [
  {
    name: "ava",
    bar: "向晚AVA",
    vmid: 672346917,
  },
  {
    name: "bella",
    bar: "贝拉BELLA",
    vmid: 672353429,
  },
  {
    name: "carol",
    bar: "珈乐CAROL",
    vmid: 351609538,
  },
  {
    name: "diana",
    bar: "嘉然DIANA",
    vmid: 672328094,
  },
  {
    name: "eileen",
    bar: "乃琳EILEEN",
    vmid: 672342685,
  },
]

function App() {
  return (
    <div className="App">
      <Title text="A-SOUL Digits"></Title>
      <div className="hover-box-container">
        <BoxList list={infoList}/>
      </div>
      <Guide></Guide>
    </div>
  );
}

export default App;
