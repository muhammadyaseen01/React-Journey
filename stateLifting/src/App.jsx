import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
    </div>
  );
}

export default App;
