import "./user.css";
import "./App.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
// import img from "./chart.png";

function App() {

  return (
    <>
    <UserCard
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    />
    <br/>
    <UserCardClass
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    />
    </>
  )
}

export default App
