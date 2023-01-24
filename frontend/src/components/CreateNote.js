import { IconButton, Paper, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import { palette } from './utils'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ColorSelector from './ColorSelector'

// props: handleCreate(id)
const CreateNote = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [selectedColor, setSelectedColor] = useState(palette[2])

  const handleTextChange = async (field, value) => {
    if (field === 'title') setTitle(value)
    else setBody(value)
  }

  const handleColorChange = async (color) => {
    setSelectedColor(color)
  }
  
  return (
    <Paper
      elevation={10}
      sx={{
        padding: 2,
        mb: 5,
        borderRadius: 3,
        backgroundColor: selectedColor,
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
          givenColor={selectedColor}
          handleColorChange={handleColorChange}
          noBadge
        />
        <IconButton
          onClick={() => {
            props.handleCreate(title, selectedColor, body)
            setTitle('')
            setBody('')
            setSelectedColor(palette[2])
          }}
        >
          <AddCircleIcon/>
        </IconButton>
      </Box>
    </Paper>
  )
}

export default CreateNote


// let response = await axios({
//   method: 'post',
//   url: '/create',
//   data: {
//     title: 'TEST CREATE',
//     color: 'green',
//     body: 'green'
//   }
// })
// let note = await response.data
// let updatedNotes = [...notes, note]
// setNotes(updatedNotes)