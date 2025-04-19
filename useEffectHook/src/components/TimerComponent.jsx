import React, { useState,useEffect } from 'react'

const TimerComponent = () => {
    const [seconds , setSeconds] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(()=>{
        console.log("Time Started!")
         setSeconds(prevSeconds => prevSeconds + 1);
      },1000)
    
      return () => {
        console.log("Time Stopped!")
        clearInterval(intervalId)
      }
    }, [])
    

  return (
    <div><h1>Second : {seconds}</h1></div>
  )
}

export default TimerComponent