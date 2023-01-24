import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NotePaper from '../components/NotePaper'
import CreateNote from '../components/CreateNote'
import { Box } from '@mui/material'

const NotesPage = () => {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    // console.log(notes)
  }, [notes])

  const getAll = async () => {
    let response = await axios({
      method: 'get',
      url: '/all'
    })
    setNotes(response.data)
  }

  const updateField = async (id, field, value) => {
    const updatedNotes = [...notes]
    let index = updatedNotes.findIndex(note => note.id === id)
    updatedNotes[index].field = value
    setNotes(updatedNotes)
  }

  const handleCreate = async (title, color, body) => {
    let response = await axios({
      method: 'post',
      url: '/create',
      data: {
        title: title ? title : 'Untitled',
        color: color,
        body: body
      }
    })
    let note = await response.data
    let updatedNotes = [...notes, note]
    setNotes(updatedNotes)
  }

  const deleteNote = async (id) => {
    const updatedNotes = notes.filter(note => 
      note.id !== id
    )
    setNotes(updatedNotes)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>My Notes</h1>
      <CreateNote handleCreate={handleCreate}/>
      {
        notes.map(note => 
          <div key={note.id}>
            <NotePaper
              note={note}
              updateField={updateField}
              deleteNote={deleteNote}
            />
          </div>
        ).reverse()
      }
    </Box>
  )
}

export default NotesPage