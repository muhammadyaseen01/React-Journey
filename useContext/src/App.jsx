import { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import "./App.css";

// const userContext = createContext();
const themeContext = createContext();

function App() {
  // const [user, setUser] = useState({ name: "Yaseen" });
  const [theme, setTheme] = useState("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div id="container" style={{backgroundColor: theme === 'light' ? "beige" : "black"}}>
        <ChildA />
      </div>
    </themeContext.Provider>

    // <userContext.Provider value = {user}>
    //   <ChildA />
    // </userContext.Provider>
  );
}

export default App;
// export { userContext };
export { themeContext };
