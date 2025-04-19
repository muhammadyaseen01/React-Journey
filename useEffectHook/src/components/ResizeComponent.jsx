import React, { useState, useEffect } from "react";

const ResizeComponent = () => {
  const[windowWidth, setWindowWidth] = useState(window.innerWidth);

  function resizeHandler() {
      setWindowWidth(window.innerWidth);
    }
    
    useEffect(() => {
    console.log("mounted!")
    window.addEventListener('resize',resizeHandler);
    return () => {
        console.log("unmounted!")
      removeEventListener('resize',resizeHandler);
    };
  }, []);

  return (
  <div>
    <h1>Width : {windowWidth}px</h1>
  </div>
);
};

export default ResizeComponent;
