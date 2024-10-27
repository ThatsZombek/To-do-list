import react, { useState, useEffect } from 'react'
import TaskItem from "./TaskItem"

function GetTasks({tasks, change, deleteToDo}) {
    
    return (
        <div className='listaZadan'>
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