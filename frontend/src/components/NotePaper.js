import React, { useState, useEffect } from 'react'
import { Paper, Box, IconButton, TextField, } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import ColorSelector from './ColorSelector'

const NotePaper = (props) => {
  const id = props.note.id
  const [title, setTitle] = useState(props.note.title)
  const [color, setColor] = useState(props.note.color)
  const [body, setBody] = useState(props.note.body)
  const [elevation, setElevation] = useState(0)

  const handleTextChange = async (field, value) => {
    await axios({
      method: 'patch',
      url: `/update/${id}`,
      data: {
        [field]: value
      }
    })
    if (field === 'title')
      setTitle(value)
    else
      setBody(value)
    props.updateField(id, field, value)
  }

  const handleColorChange = async value => {
    await axios({
      method: 'patch',
      url: `/update/${id}`,
      data: {
        color: value
      }
    })
    setColor(value)
  }

  const handleDelete = async () => {
    await axios({
      method: 'delete',
      url: `/delete/${id}`
    })
    props.deleteNote(id)
  }

  return (
    <Paper
      onMouseOver={() => setElevation(5)}
      onMouseOut={() => setElevation(0)}
      elevation={elevation}
      sx={{
        padding: 2,
        mb: 5,
        borderRadius: 3,
        backgroundColor: color,
        maxWidth: 600
      }}
    >
      <TextField
        InputProps={{
          disableUnderline: true,
          style: {fontSize: 24, paddingBottom: 0}
        }}
        sx={{mx: 1}}
        fullWidth={true}
        multiline={true}
        variant='standard'
        onChange={e => {
          handleTextChange('title', e.target.value)
        }}
        placeholder='Title'
        value={title}
      />
      <TextField
        InputProps={{
          disableUnderline: true,
          style: {fontSize: 16, paddingBottom: 0}
        }}
        sx={{mx: 1, mb: 2}}
        fullWidth={true}
        multiline={true}
        variant='standard'
        onChange={e => {
          handleTextChange('body', e.target.value)
        }}
        placeholder='Start typing your notes here.'
        value={body}
      />
      <Box style={{display: 'flex', justifyContent: 'space-between'}}>
        <ColorSelector
          givenColor={color}
          handleColorChange={handleColorChange}
        />
        <IconButton
          onClick={() => {
            handleDelete()
          }}
        >
          <DeleteIcon/>
        </IconButton>
      </Box>
    </Paper>
  )
}

export default NotePaper