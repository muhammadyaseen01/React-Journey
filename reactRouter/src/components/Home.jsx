import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/about")
  }
  return (
    <>
      <div>Home</div>
      <button onClick={handleClick}>Go to About Page</button>
    </>
  );
}

export default Home;
