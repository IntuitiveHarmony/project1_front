import React from "react";
import {useState} from 'react';

const Step = (props) => {
  const [note, setNote] = useState('C4')
  const [active, setActive] = useState(false)



  const handleNoteChange = (event) => {
    setNote(event.target.value)
  }

  const handleActivate = (event) => {
    setActive(!active)
  }

  return (
    <>
    {active ?
      <div onClick={() => {handleActivate()}} className ={props.step.class} id='active' >{props.step.position}
      <br/>
      <select onChange={handleNoteChange}>
        <option value='C4'>C4</option>
        <option value='E4'>E4</option>
        <option value='G4'>G4</option>
        <option value='A4'>A4</option>
      </select>
      </div>
      :
      <div onClick={() => {handleActivate()}} className ={props.step.class} >{props.step.position}
      <br/>
      <select onChange={handleNoteChange}>
        <option value='C4'>C4</option>
        <option value='E4'>E4</option>
        <option value='G4'>G4</option>
        <option value='A4'>A4</option>
      </select>
      </div> }

    </>
  )

}

export default Step
