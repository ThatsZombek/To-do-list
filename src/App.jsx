import { useState, useEffect } from 'react'
import AddTask from './components/AddTask.jsx'
import GetTasks from './components/GetTasks.jsx'
import FilterTasks from './components/FilterTasks.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [filterToDos, setFilter] = useState("all")

  useEffect(() => { // odczytanie zadań z localStorage
    const savedToDos = JSON.parse(localStorage.getItem('tasks'))
    if(savedToDos) {
      setTasks(savedToDos)
      console.log(savedToDos.toString())
    }
  }, [])

  useEffect(() => { // zapisanie zadań w localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
  }, [tasks])

  const addTask = taskName => { // dodanie zadania
    const newTask = {
      name: taskName,
      finished: false
    }
    setTasks([...tasks, newTask]);
    
  }

  function change(index) { // zmiana statusu zadania na ukończone/nieukończone
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, finished: !task.finished } : task
    );
    setTasks(updatedTasks);
  }

  function deleteToDo(index) { // usunięcie zadania
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function filterTask() { // filtruje zadania wg wybranego filtru
    if(filterToDos == "all") {
      return tasks
    }
    else if(filterToDos == "finished") {
      return tasks.filter((task) => task.finished==true)
    }
    else {
      return tasks.filter((task) => task.finished==false)
    }
  }


  const filteredTasks = filterTask() // przefiltrowane zadania


  
  return (
    <>
      <div className="AllContainer">
        <AddTask addTask={addTask}/>
        <FilterTasks setFilter={setFilter}/>
        <GetTasks tasks={filteredTasks} change={change} deleteToDo={deleteToDo}/>
      </div>
    </>
  )
}

export default App
