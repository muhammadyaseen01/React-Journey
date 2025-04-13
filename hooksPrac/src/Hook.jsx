import { useState } from "react";

export default function Hook(){
    const [darkTheme,setDarkTheme] = useState(false)

    const theme = {
        darkTheme:{
            backgroundColor : "gray",
            color : "White",
            padding : "20px"
        },
        lightTheme:{
            backgroundColor : "white",
            color : "black",
            padding : "20px"
        }
        
    }

    return (
        <>
            Enable Dark Theme:
            <input 
            type="checkbox"
            // checked={darkTheme}
            onChange={()=>setDarkTheme(prevTheme => !prevTheme)}
            ></input>
            <div style={darkTheme ? theme.darkTheme : theme.lightTheme}>
                <h1>UseSTATE Hook in React</h1>
                <p>Hello we are using useState Hook</p>
            </div>
        </>
    )
}