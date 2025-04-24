import { useEffect,useState } from "react";
import "./App.css";

function App() {

  const [usersData, setUsersData] = useState([])

  useEffect(()=>{
    getUsersData();
  },[])

  async function getUsersData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    // console.log(response);
    // console.log(response.users);
    setUsersData(response.users)

  }
  console.log(usersData);
  

  return (
    <div>
      <h1>Fetch Data from API</h1>
      <ul className="user-list user-list-head">
        <li>FirstName</li>
        <li>LastName</li>
        <li>Age</li>
      </ul>
      {
        usersData &&  usersData.map((user)=>(
          <ul className="user-list">
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))
      }
      
    </div>
  );
}

export default App;
