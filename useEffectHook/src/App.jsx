import { useEffect, useState } from "react";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponent from "./components/ResizeComponent";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // function handleClick() {
  //   setCount(count + 1);
  // }
  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }
  //first --> side-effect
  // second --> clean-up function --> run on unmount
  // third --> dependency list

  // Variation : 1
  // that run at every render
  // dependency list nh denge to
  //---------------------------------------------
  // useEffect(() => {
  //   alert("i will run on every render!");
  // });
  //---------------------------------------------

  //Variation : 2
  // run on only first render
  //-------------------------------------------
  // useEffect(() => {
  //   alert("run only on first render!")
  // }, [])
  //----------------------------------------------
  //Variation : 3
  // run on updation in dependency list
  //----------------------------------------------
  // useEffect(() => {
  //   alert("change in count")
  // }, [count])
  //----------------------------------------------

  //Variation : 4
  // multiple dependencies
  // useEffect(() => {
  //   alert("multiple dependency render")
  // }, [count,total])
  //----------------------------------------------

  //Variation : 5
  // let's add a clean up fn
  // useEffect(() => {
  //   alert("Count is updated!");
  //   return () => {
  //     alert("count is unmounted from UI");
  //   };
  // }, [count]);

  // return (
  //   <div>
  //     <button onClick={handleClick}>Update Count</button>
  //     <h1> {count}</h1>
  //     <br />
  //     <button onClick={handleClickTotal}>Update Total</button>
  //     <h1> {total}</h1>
  //   </div>
  // );

  return (
    <div>
      {/* <TimerComponent /> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent /> */}
    </div>
  );
}

export default App;
