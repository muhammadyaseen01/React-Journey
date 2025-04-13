import { useState } from "react";
import Counter from "./Counter.jsx";
import Person from "./Person.jsx";
import ConditionalCounter from "./conditionalCounter.jsx";

function App() {
  const [name, setName] = useState("Yaseen");
  const [age,setAge] = useState(22);
  function handleClick() {
    setName("Muhammad Azam");
    // setAge(age + 1);

    // if i want to increase age by 2
    setAge(currentAge =>{
      return currentAge + 1
    })

    setAge(currentAge =>{
      return currentAge + 1
    })
  }
  return (
    // <Counter />
    // <Person />
    <ConditionalCounter /> 

  );
}

export default App;
