import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; //? Boostrap css
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import NotFound from "./components/404/404";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/user/:username" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
