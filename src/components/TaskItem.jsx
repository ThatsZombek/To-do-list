import react, { useState, useEffect } from 'react'

function TaskItem({task, index, change, deleteToDo}) {

    return (
        <div className='task'>
            <input 
                type="checkbox" 
                checked={task.finished} 
                onChange={() => change(index)}
            />
            {task.name}
            <button className='deleteBtn' onClick={() => deleteToDo(index)}>Usuń</button>
        </div>
    )
}

export default TaskItem