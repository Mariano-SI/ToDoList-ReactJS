import React, { useState } from 'react'
import Button from '../Button/Button'
import './AddTask.css'


const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState(null)

    function handleInputChange(e) {
        setInputData(e.target.value)
    }

   function handleAddTaskClick(){
        if(!inputData){
            alert("A tarefa não pode estar vazia");
        }else{
            handleTaskAddition(inputData)
            setInputData('')
        }
   }
  return (
    <div className='add-task-container'>

        <input type="text" value={inputData} onChange={handleInputChange} className='add-task-input'/>

        <div className='button-container'>
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
  )
}

export default AddTask