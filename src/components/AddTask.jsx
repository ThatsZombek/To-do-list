import react, { useState, useEffect } from 'react'

function AddTask({addTask}) {
    const [todo, setToDo] = useState(" ") 
    
    
    function validate() { // sprawdzamy czy nazwa zadania nie jest pusta
        if(todo.trim().length == 0) {
            alert("Pole nie może być puste")
            return false
        }
        
        return true
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validate()) {
            alert('Dodano zadanie')
            addTask(todo)
            setToDo("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Dodaj zadanie:</label>
                <input
                    id='addTask'
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