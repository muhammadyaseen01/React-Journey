import { useState } from "react";

function Person(){
    //this is not a good approach deal two with one hook
    const [person,setPerson] = useState({name :"Yaseen" , age:22});
    function handleClick (){
        setPerson(currentPerson =>{
            return {...currentPerson, name: "Muhammad"}
        })
    }
    return (
        <h1 onClick={handleClick}>{person.name} {person.age}</h1>
    )
}

export default Person