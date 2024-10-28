import react, { useState, useEffect } from 'react'

function TaskItem({task, index, change, deleteToDo}) {
    // komponent wypisujący dane zadanie
    return (
        <div className='task'>
            {/* stare */}
            {/* <input 
                type="checkbox" 
                checked={task.finished} 
                onChange={() => change(index)}
            /> */}
            {/* nowe */}
            <label className="container">
                <input 
                    checked={task.finished} 
                    type="checkbox"
                    onChange={() => change(index)}
                />
                <div className="checkmark"></div>
            </label>
            {task.finished ? <div className='finished'>{task.name}</div> : <div>{task.name}</div>}
            {/* <button className='deleteBtn' onClick={() => deleteToDo(index)}>Usuń</button> */}
            <button className="deleteBtn" onClick={() => deleteToDo(index)}><span className="text">Usuń</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
        </div>
    )
}

export default TaskItem