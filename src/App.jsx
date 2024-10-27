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
    }
  }, [])

  useEffect(() => { // zapisanie zadań w localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
  }, [tasks])

  const addTask = taskName => { // dodanie zadanka
    const newTask = {
      name: taskName,
      finished: false
    }
    setTasks([...tasks, newTask]);
    
  }

  function change(index) { // ukończone/nieukończone
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, finished: !task.finished } : task
    );
    setTasks(updatedTasks);
  }

  function deleteToDo(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function filterTask() {
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

  // do zrobienia
  const filteredTasks = filterTask()
  // if(filter == "all") return tasks
  //   else if(filter == "finished") {
  //     return tasks.filter((task) => task.finished==true)
  //   }
  //   else {
  //     return filteredTasks = tasks.filter((task) => task.finished==false)
  //   }


  
  return (
    <>
      <AddTask addTask={addTask}/>
      <FilterTasks setFilter={setFilter}/>
      <GetTasks tasks={filteredTasks} change={change} deleteToDo={deleteToDo}/>
    </>
  )
}

export default App
