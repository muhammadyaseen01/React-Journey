import React from "react";

// const Card = (props) => {
//   return (
//     <div>
//       {props.children}
//       <button onClick={props.handleClick}>{props.text}</button>
//     </div>
//   );
// };


const Card = ({handleClick,text,children}) => {
  return (
    <div>
      {children}
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default Card;
