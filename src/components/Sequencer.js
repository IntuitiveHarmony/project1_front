import React from "react";
import * as Tone from 'tone'
import {useState} from 'react';
import Step from './Step'
import Edit from './Edit'
import Delete from './Delete'


const Sequencer = (props) => {
  let emptySeq = {name: 'Funky', steps: 32}
  let [currentSeq, setCurrentSeq] = useState(emptySeq)

  //---------------------------------------------
  //  steps grid based on state of currentSeq
  //---------------------------------------------
  let steps = []
  let division = 4

  for (let i = 0; i < currentSeq.steps; i++) {
    division -= 1
    if (division >= 0) {
      steps.push({position: i + 1, class:'step dark'})
    } else {
      steps.push({position: i + 1, class:'step light'})
    }
    if (division === -4) {
      division = 4
    }
  }


  const handleSelect = (event) => {
    for (let i = 0; i < props.sequences.length; i++) {
      if (props.sequences[i].id == event.target.value) {
        setCurrentSeq(props.sequences[i])
      }
    }
    // setCurrentId(event.target.value)
    // event.preventDefault()
    // setCurrentSeq(event.target.value)
    // console.log(event.target.value)
  }


  return (
    <>
    <Edit currentSeq={currentSeq} handleUpdate={props.handleUpdate}/>
    <Delete currentSeq={currentSeq} handleDelete={props.handleDelete}/>
    <h3>Sequence: {currentSeq.name}</h3>
      <select onChange={handleSelect}>
        {props.sequences.map((sequence) => {
          return (
            <>
              <option key={sequence.id} value={sequence.id} >{sequence.name}</option>
            </>
          )
        })}
      </select>



      <div className='sequencerContainer'>
        {steps.map((step) => {
          return (
            <>
              <Step step={step} key={step.position}/>
            </>
          )
        })}
      </div>
    </>
  )

}

export default Sequencer
