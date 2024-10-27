import react, { useState, useEffect } from 'react'

function AddTask({addTask}) {
    const [todo, setToDo] = useState(" ") 
    
    
    const validate = () => { // sprawdzamy czy puste
        if(todo.length == 0) {
            alert("Pole nie może być puste")
        }
        
        return -1
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validate()) {
            alert('Dodano zadanie')
            addTask(todo)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Dodaj zadanie:</label>
                <br/>
                <input
                    type = "text"
                    value = {todo}
                    onChange={(e) => setToDo(e.target.value)}
                />
        
            </div>
            <br/>
            <button type='submit'>Dodaj</button>
        </form>
    )
}

export default AddTask