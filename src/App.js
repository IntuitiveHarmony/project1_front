import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Sequencer from './components/Sequencer'


const App = () => {
  const [sequences, setSequences] = useState([])

  //---------------------------------------------
  //  GET SEQUENCE ROUTE
  //---------------------------------------------
  const getSequences = () => {
    axios
    .get('http://localhost:8000/api/sequencer')
    .then(
      (response) => setSequences(response.data),
      (err) => console.error(err)
    )
   .catch((error) => console.error(error))
  }
  //---------------------------------------------
  //  CREATE NEW SEQUENCE ROUTE
  //---------------------------------------------
  const handleCreate = (addSequence) => {
    axios.post('http://localhost:8000/api/sequencer', addSequence)
    .then((response) => {
      setSequences([...sequences, response.data])
    })
  }
  //---------------------------------------------
  //  UPDATE SEQUENCE ROUTE
  //---------------------------------------------
  const handleUpdate = (editSequence) => {
     axios.put('http://localhost:8000/api/sequencer/' + editSequence.id, editSequence)
     .then((response) => {
       setSequences(sequences.map((sequence) => {
        return sequence.id !== editSequence.id ? sequence : editSequence
      }))
    })
  }
  //---------------------------------------------
  //  DELETE SEQUENCE ROUTE
  //---------------------------------------------
  const handleDelete = (deletedSequence) => {
   console.log(deletedSequence)
     axios.delete('http://localhost:8000/api/sequencer/' + deletedSequence.id)
     .then((response) => {
       setSequences(sequences.filter(sequence => sequence.id !== deletedSequence.id))
    })
  }

  useEffect(() => {
   getSequences()
  }, [])

  return (
    <>
      <h2>Project1 Sequencer</h2>
      <Sequencer sequences={sequences} handleUpdate={handleUpdate} handleDelete={handleDelete} handleCreate={handleCreate}

      />
    </>
  )

}

export default App;
