import React from 'react';
import { Typography, TextField, Box, Modal, Button } from "@mui/material/";


const textField = {
    padding: '1rem',

  }
  const btn_style = {
    fontSize : '20px'
  }

  export default function TaskModal (
      {
        style, 
        addTask, 
        updateTask, 
        updateClick, 
        newTask, 
        handleInput , 
        open, 
        handleClose
    }){

      const btnText = updateClick ? <span>update</span> : <span>add+</span> 
  

    return (
        <div className="add--todo" >
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          
        >
        <Box sx={{ ...style }}>
          <Typography 
            variant='h3' 
            align='center' 
            gutterBottom >    Add Todo
          </Typography> 

          <TextField 
            fullWidth 
            color='primary'  
            id="title" 
            label="Title here" 
            variant="standard"
            name = "title"
            value={newTask.title}
            onChange={handleInput}  
            sx={{...textField}}
            type='text'
          />

          <TextField 
            fullWidth 
            color='primary'  
            id="descr" 
            label="description here" 
            variant="standard" 
            name = "description"
            multiline= "true"
            value={newTask.description}
            onChange={handleInput}
            sx={{...textField}}
            type='text'
          />

          <Button 
            size="small" 
            variant="contained" 
            sx={{...btn_style, mt: 2}} 
            onClick={updateClick? updateTask :addTask}
          > 
            {btnText}
          </Button>

        </Box>

      </Modal>
    </div>
    )
}

