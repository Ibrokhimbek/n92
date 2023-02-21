import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/404/404";
import Settings from "./components/Settings/Settings";
import UserHistory from "./components/UserHistory/UserHistory";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("uz");

  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route index path="/" element={<Home lang={lang} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route>
          <Route path="/user" element={<UserHistory />} />
          <Route path="/user/:username" element={<Profile />} />
          <Route path="/user/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
