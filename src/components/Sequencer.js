import React from "react";
import * as Tone from 'tone'
import {useState} from 'react';
import Step from './Step'


const Sequencer = (props) => {
  let emptySeq = {name: 'Funky', steps: 33}
  let [currentSeq, setCurrentSeq] = useState(emptySeq)
  let [userSteps, setUserSteps] = useState(16)

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
  const handleSteps = (event) => {
    setUserSteps(event.target.value)
  }

  const handleSelect = (event) => {
    event.preventDefault()
    setCurrentSeq(event.target.value)
    console.log(event.target.value)
  }


  return (
    <>
    <h3>Sequence: {currentSeq.name}</h3>
      <select onChange={handleSelect}>
        {props.sequences.map((sequence) => {
          return (
            <>
              <option key={sequence.id} value={sequence}>{sequence.name}</option>
            </>
          )
        })}
      </select>
    <input type='text' onChange={handleSteps} />
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
