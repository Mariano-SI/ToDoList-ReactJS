import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '../Button/Button'
import './TaskDetails.css'
import { useHistory } from 'react-router-dom'

const TaskDetails = () => {
    const history = useHistory()
    const params = useParams()

    const handleBackButtonClick = () =>{
        history.push('/')
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae repellendus qui culpa, mollitia quis.</p>
            </div>
        </>
    )
}

export default TaskDetails