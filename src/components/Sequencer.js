import React from "react";
import {useState} from 'react';
import Step from './Step'


const Sequencer = (props) => {
  let [currentSeq, setCurrentSeq] = useState({})
  let [userSteps, setUserSteps] = useState(16)

  //---------------------------------------------
  //      steps grid based on user input
  //---------------------------------------------
  let steps = []
  let division = 4

  for (let i = 0; i < userSteps; i++) {
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
    setCurrentSeq()
  }


  return (
    <>
    <h3>Sequence: </h3>
    <form>
      <select onSubmit={handleSelect}>
        {props.sequences.map((sequence) => {
          return (
            <option>{sequence.name}</option>
          )
        })}
      </select>
    </form>
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
