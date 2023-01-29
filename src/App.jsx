import React, { useEffect, useState } from 'react';
import './App.css'
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails/TaskDetails'
import axios from 'axios';

const App = () =>{
  const [tasks, setTasks] = useState([]);

/*   useEffect(()=>{
    const fetchTasks = async () =>{
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
      setTasks(data)
    }

    fetchTasks();
  },[])
 */

  function handleTaskClick(taskId) {
    const newTask = tasks.map((task)=>{
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task
    })
    setTasks(newTask)
  }

  function handleTaskDeletion(taskId) {
    const newTask = tasks.filter( task => task.id !== taskId)
    setTasks(newTask)
  }

  function handleTaskAddition(taskTitle){
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className='container' >
        <Header/>
        <Route path="/" exact render={()=>(
          <>
          <AddTask handleTaskAddition={handleTaskAddition} />
          
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
        )}/>
        <Route path="/:taskTitle" exact component={TaskDetails}/>
        
      </div>  
    </Router>
  )
}

export default App;