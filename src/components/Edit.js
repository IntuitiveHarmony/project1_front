import React from "react";
import {useState} from 'react';

const Edit = (props) => {
  let [currentSeqEdit, setCurrentSeqEdit] = useState({...props.currentSeq})

  const handleSeqEdit = (event) => {
    setCurrentSeqEdit({...currentSeqEdit, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(currentSeqEdit)
    props.updateSeq(currentSeqEdit)
    // console.log(currentSeq)
  }

  return (
    <>
      <details>
        <summary>Update Current</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type='text' name='name' defaultValue={props.currentSeq.name} onChange={handleSeqEdit} />
          <br/>
          <label htmlFor="steps">Steps: </label>
          <input type='number' name='steps' defaultValue={props.currentSeq.steps} onChange={handleSeqEdit} min='4' max='64'/>
          <input type="submit"/>
        </form>
      </details>
    </>
  )

}

export default Edit
