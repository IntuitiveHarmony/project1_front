import React from "react";
import {useState} from 'react';

const Delete = (props) => {
  // const [currentSeq, setCurrentSeq] = useState(props.currentSeq)
  return (
    <>
      <details>
        <summary>Delete Current</summary>
        <button onClick={()=>{
          props.handleDelete(props.currentSeq)
          
        }}>DELETE!</button>
      </details>
    </>
  )

}

export default Delete
