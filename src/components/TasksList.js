import React, { useEffect, useState } from "react";
import Task from "./Task";
import Todos from "../data.js";
import { Container, Button } from "@mui/material/";
import { nanoid } from 'nanoid';
import TaskModal from './modal'


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '90%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function TasksList() {

  const [todosList, setTodosList] = useState(
    () => JSON.parse(localStorage.getItem("todosList")) || []

  );
  const [newTask , setNewTask ] = useState({
    title: '',
    description: ''
  });
  const [updateClick , setUpdateClick] = useState(false);
  const [currentId, setCurrentId] = useState('');
 
  function handleInput(event){
    setNewTask({
      ...newTask,
      [event.target.name] : event.target.value
    })
  }
  const [open, setOpen] = useState(false);// for a MUI Modal
  //mui modal related function ===> starts here
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setUpdateClick(false);
    setOpen(false);
  };

  //==============> ends here

  function addTask() {
    const { title, description} = newTask;
    setTodosList(prevData => [...prevData, {id: nanoid(), title: title, description: description}])
    newTask.title = '';
    newTask.description = "";
    return newTask;
  }

  const handleDelete = (id) => {
    
    todosList.map((todo, index) => {
        if(id === todo.id){
          todosList.splice(index, 1);
        }
    })
    setTodosList([...todosList]);
    return todosList;
  }

  const updateBtnClick = (id) => {
    setUpdateClick(true);
    setCurrentId(id);
    handleOpen();
  }

  const updateTask = () => {
    const { title, description} = newTask;
    let task = todosList.find(todo => {
      return todo.id === currentId
      }) || todosList[0]
    // todosList[todosList.indexOf(task)] = {...task, title: title, description: description};
    setTodosList(todosArray => {
      const oldTask = todosArray.splice(todosArray.indexOf(task) , 1);
      const updatedTask = {id: currentId, title: title, description: description};
      return [updatedTask,...todosArray]
    } )
    console.log(todosList[todosList.indexOf(task)])
    newTask.title = "";
    newTask.description = "";
    newTask.id = "";  
    handleClose();
    return newTask;     
  }

  useEffect(
    () => {
    //     setTodosList([...Todos])
    // }, []
    localStorage.setItem("todosList", JSON.stringify(todosList))
  }, [todosList]
  )

  const elements = todosList.map((todo , index) => {
    return (
            <Task 
            key= {todo.id}
            id = {todo.id} 
            index = {index}
            title={todo.title} 
            description={todo.description}
            handleDelete = {handleDelete}
            updateBtnClick={updateBtnClick}
            />
        );
  });

  

  return (

    <Container 
         
        sx={{
            background: '#8b93c4', 
            borderRadius: '1rem', 
            padding: "4rem",
            boxShadow: 5
            }}
    >

        <Button 
            onClick={handleOpen} 
            color='secondary' 
            variant="contained" 
            sx={{fontSize: "2rem"}}
            >
                Add task
        </Button>

    <TaskModal
      style = {style}
      addTask = {addTask}
      updateTask={updateTask}
      updateClick = {updateClick}
      handleInput= {handleInput}
      newTask ={newTask}
      open={open}
      handleClose={handleClose}
    /> 
        
    <div className="container--task_list">{elements}</div>

    </Container>
  );
}
