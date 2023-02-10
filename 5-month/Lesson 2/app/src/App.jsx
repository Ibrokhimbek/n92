// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Counter from "./components/Counter/Counter";
import "./App.css";
import Userlist from "./components/Userlist/Userlist";

function App() {
  // const data = (function () {
  //   return "Hello world";
  // })();

  return (
    <div className="App">
      <div className="container">
        <Userlist />
      </div>
    </div>
  );
}

export default App;
