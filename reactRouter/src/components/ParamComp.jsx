import React from 'react'
import { useParams } from 'react-router'

function ParamComp() {
    const {id} = useParams();
  return (
    <div>Param : {id}</div>
  )
}

export default ParamComp