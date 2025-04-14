import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Card handleClick={handleClick} text="Click me">
      <h1>{count}</h1>
    </Card>
  );
}

export default App;
