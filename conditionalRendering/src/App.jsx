import { useState } from "react";
import LoggedIn from "./components/loggedIn";
import LoggedOut from "./components/loggedOut";

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);


  //By Using if else
  if(isLoggedIn){
    return(
      <LoggedOut/>
    )
  }
  else{
    return <LoggedIn/>
  }

  // by using ternary op
  // return(
  // <div>
  //   {isLoggedIn ? <LoggedOut /> : <LoggedIn />}
  // </div>
  // );
}

export default App;
