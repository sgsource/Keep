import React, { useState, useEffect } from 'react'
import { palette } from './utils.js'
import {
  IconButton,
  Tooltip,
  Badge,
  Paper
} from '@mui/material'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ColorSelector = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.givenColor)
  const [isSelecting, setIsSelecting] = useState(false)

  return (
    <div>
      {
        isSelecting ?
        <Paper
          sx={{ borderRadius: 5, width: 'fit-content' }}
        >
          {
            palette.map(color => (color === selectedColor) ?
            <IconButton
            onClick={() => {
              setIsSelecting(false)
            }}
            >
              {
                !props.noBadge ?
                <Badge badgeContent={
                  <CheckCircleIcon sx={{width: '15px'}}/>
                }>
                  <CircleIcon sx={{color: color}}/>
                </Badge>
                :
                <CircleIcon sx={{color: color}}/>
              }
            </IconButton>
            :
            <IconButton
              onClick={() => {
                setSelectedColor(color)
                setIsSelecting(false)
                props.handleColorChange(color)
              }}
            >
              <CircleIcon sx={{color: color}}/>
            </IconButton>
            )
          }
        </Paper>
        :
        <Tooltip title='Select Color'>
          <IconButton
            onClick={() => {
              setIsSelecting(true)
            }}
          >
            <ColorLensOutlinedIcon/>
          </IconButton>
        </Tooltip>
      }
    </div>
  )
}

export default ColorSelector