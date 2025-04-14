import { useState } from "react";

function App() {

  function handleChange(e){
    console.log("value of inout until now : ",e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Are you sure to submit this form?")
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}
export default App;
