import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import * as Tone from 'tone'
import Step from './components/Step'

const App = () => {
  let [sequences, setSequences] = useState()
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

  const getSequences = () => {
    axios
    .get('http://localhost:8000/api/sequencer')
    .then(
      (response) => setSequences(response.data),
      (err) => console.error(err)
    )
   .catch((error) => console.error(error))
 }

  useEffect(() => {
   getSequences()
  }, [])

  return (
    <>
      <h2>Hai</h2>
      <h3>Sequence: </h3>
      <form>
        <select>
          <option>PLaese</option>
          <option>PLaese</option>
          <option>PLaese</option>
          <option>PLaese</option>
          <option>PLaese</option>
          <option>PLaese</option>
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

export default App;
