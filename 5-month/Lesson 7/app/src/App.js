import { useState } from "react";
import "./App.css";
import Profiles from "./components/Profiles/Profiles";
import UsersContext from "./context/UsersContext";
import users from "./data/users";

function App() {
  const [data, setData] = useState(users);

  return (
    <div className="App">
      <UsersContext.Provider value={data}>
        <Profiles />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
