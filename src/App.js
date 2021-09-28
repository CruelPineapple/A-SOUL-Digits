
import "./App.css";
import Title from "./components/title/title";
import HoverBox from "./components/HoverBox/HoverBox";
function App() {
  return (
    <div className="App">
      <Title text="A-SOUL Digits"></Title>
      <div className="hover-box-container">
          <HoverBox name="ava"></HoverBox>
          <HoverBox name="bella"></HoverBox>
          <HoverBox name="carol"></HoverBox>
          <HoverBox name="diana"></HoverBox>
          <HoverBox name="eileen"></HoverBox>
        </div>
    </div>
  );
}

export default App;
