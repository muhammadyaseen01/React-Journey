import React from 'react'


const Heading = ({name1,age,children}) => {
  return (
    <label >
        <input type='checkbox' defaultChecked={true}/>
        <br></br>
        hello {name1} {age }
        {children}
    </label>
  )
}

export default Heading