import react, { useState, useEffect } from 'react'

function TaskItem({task, index, change, deleteToDo}) {
    // komponent wypisujący dane zadanie
    return (
        <div className='task'>
            <input 
                type="checkbox" 
                checked={task.finished} 
                onChange={() => change(index)}
            />
            {task.finished ? <div className='finished'>{task.name}</div> : <div>{task.name}</div>}
            <button className='deleteBtn' onClick={() => deleteToDo(index)}>Usuń</button>
        </div>
    )
}

export default TaskItem