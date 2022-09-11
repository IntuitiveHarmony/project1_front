import React from "react";
import {useState} from 'react';

const Edit = (props) => {
  const [currentSeq, setCurrentSeq] = useState({...props.currentSeq})

  const handleStepsEdit = (event) => {
    setCurrentSeq({...currentSeq, [event.target.name]: event.target.value})
  }



  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(currentSeq)
    console.log(currentSeq)
  }

  return (
    <>
      <details>
        <summary>Edit Current Sequence</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type='text' name='name' placeholder={props.currentSeq.name} onChange={handleStepsEdit} />
          <br/>
          <label htmlFor="steps">Steps: </label>
          <input type='number' name='steps' placeholder={props.currentSeq.steps} onChange={handleStepsEdit} />
          <input type="submit"/>
        </form>
      </details>
    </>
  )

}

export default Edit
