import React from 'react'
import { useNavigate } from 'react-router';
function About() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/dashboard")
  }
  return (
    <>
    <div>About</div>
    <button onClick={handleClick}>Go to Dashboard Page</button>
    </>
    )
}

export default About