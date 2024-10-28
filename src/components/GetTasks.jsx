import react, { useState, useEffect } from 'react'
import TaskItem from "./TaskItem"

function GetTasks({tasks, change, deleteToDo}) {
    // komponent z listą zadań
    return (
        <div className='tasksList'>
            {tasks.length > 0 ? <h3>Liczba zadań: {tasks.length}</h3> : <h3>Brak zadań</h3>}
            {tasks.map((task, index) => (
                <TaskItem 
                    key={index}
                    task={task}
                    index={index}
                    change={change}
                    deleteToDo={deleteToDo}
                />
            ))}
        </div>
    )
}

export default GetTasks