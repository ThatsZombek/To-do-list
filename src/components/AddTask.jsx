import react, { useState } from 'react'

function AddTask() {
    const {task, setTast} = useState(" ")

    return (
        <div>
            <input 
                type='text'
                placeholder='Podaj zadanie'
                value={task}
                
            />
        </div>
    )
}