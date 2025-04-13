import { useState } from "react";

export default function ConditionalCounter(){
    const [count, setCount] = useState(10);
    function addValue(){
        setCount(currentCount =>{
            if (currentCount < 20){
                return currentCount + 1
            }
            else{
                return 20;
            }
        })
    }

    function decValue(){
        setCount(currentCount =>{
            if (currentCount > 0){
                return currentCount - 1
            }
            else{
                return 0;
            }
        })
    }

    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={addValue}>increase Value</button>
            <br /><br />
            <button onClick={decValue}>decrease Value</button>
        </div>
    )
}