import ReactDOM from "react-dom";
import TopContainer from "./TopContainer";
import MobileTop from "./MobileTop";
import Container from "./Container";
import Feetbar from "./Feetbar";

function App() {
  return (
    <div>
        <TopContainer classes="top-container"/>
        <MobileTop />
        <Container />
        <Feetbar />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector(".root"));