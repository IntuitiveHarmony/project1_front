import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import * as Tone from 'tone'

import Sequencer from './components/Sequencer'

const App = () => {
  const [sequences, setSequences] = useState([{}])
  




  const getSequences = () => {
    axios
    .get('http://localhost:8000/api/sequencer')
    .then(
      (response) => setSequences(response.data),
      (err) => console.error(err)
    )
   .catch((error) => console.error(error))
 }

 const handleCreate = (addSequence) => {
   axios.post('http://localhost:8000/api/sequencer', addSequence)
    .then((response) => {
      setSequences([...sequences, response.data])
    })
 }

  useEffect(() => {
   getSequences()
  }, [])

  return (
    <>
      <h2>Hai</h2>
      <Sequencer sequences={sequences} />
    </>
  )

}

export default App;
