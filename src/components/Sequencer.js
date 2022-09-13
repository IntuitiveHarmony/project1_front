import React from "react";
import * as Tone from 'tone'
import {useState} from 'react';
import Step from './Step'
import Add from './Add'
import Edit from './Edit'
import Delete from './Delete'


const Sequencer = (props) => {

  let emptySeq = {name: 'Create or Restore', steps: 0}
  const [currentSeq, setCurrentSeq] = useState(emptySeq)


  //---------------------------------------------
  //  Synth(s)?
  //---------------------------------------------

  let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination()

  const playNote = (note) => {
    console.log(note)
    synth.triggerAttackRelease(note, "8n")
  }
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

  const updateSeq = (currentSeq) => {
    setCurrentSeq(currentSeq)
    console.log(currentSeq)
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
    <Add handleCreate={props.handleCreate} updateSeq={updateSeq}/>
    <details>
      <summary>Restore Previous</summary>
      <select onChange={handleSelect}>
        {props.sequences.map((sequence) => {
          return (
            <>
              <option key={sequence.id} value={sequence.id} >{sequence.name}</option>
            </>
          )
        })}
      </select>
    </details>
    <Edit currentSeq={currentSeq} handleUpdate={props.handleUpdate} updateSeq={updateSeq}/>
    <Delete currentSeq={currentSeq} handleDelete={props.handleDelete}/>
    <h3>Sequence: {currentSeq.name}</h3>




      <div className='sequencerContainer'>
        {steps.map((step) => {
          return (
            <>
              <Step step={step} key={step.position} playNote={playNote}/>
            </>
          )
        })}
      </div>
    </>
  )

}

export default Sequencer
