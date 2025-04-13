import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }
    return(
        // <p onClick={handleClick}>Your count is {count}</p>
        <p onClick={()=> setCount(currentCount => currentCount + 1)}>Your Count is {count}</p>
    ) 
}
export default Counter