import React from "react";
import {useState} from 'react';

const Add = (props) => {
  let emptySeq = {name: '', steps:  16 }
  const [newSequence, setNewSequence] = useState(emptySeq)

  const handleChange = (event) => {
    setNewSequence({...newSequence, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(newSequence)
    props.updateSeq(newSequence)
    setNewSequence(emptySeq)

  }

  return (
    <>
      <details>
        <summary>Create New</summary>
        <form onSubmit={handleSubmit}>
          Name: <input type="text" name="name" onChange={handleChange} value={newSequence.name}/>
          <br/>
          Steps: <input type="number" name="steps" onChange={handleChange} value={newSequence.steps} min='4' max='64'/>
          <input type="submit"/>
        </form>
      </details>
    </>
  )

}

export default Add
