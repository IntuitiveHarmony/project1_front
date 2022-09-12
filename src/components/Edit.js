import React from "react";
import {useState} from 'react';

const Edit = (props) => {
  const [currentSeq, setCurrentSeq] = useState({...props.currentSeq})

  const handleStepsEdit = (event) => {
    setCurrentSeq({...props.currentSeq, [event.target.name]: event.target.value})
  }



  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(currentSeq)
    props.updateSeq(currentSeq)
    console.log(currentSeq)
  }

  return (
    <>
      <details>
        <summary>Update Current</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type='text' name='name' placeholder={props.currentSeq.name} onChange={handleStepsEdit} />
          <br/>
          <label htmlFor="steps">Steps: </label>
          <input type='number' name='steps' placeholder={props.currentSeq.steps} onChange={handleStepsEdit} min='4' max='64'/>
          <input type="submit"/>
        </form>
      </details>
    </>
  )

}

export default Edit
