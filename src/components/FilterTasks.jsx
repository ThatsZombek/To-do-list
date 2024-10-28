import react, { useState, useEffect } from 'react'

function FilterTasks({setFilter}) {
    // komponent z wyborem filtrowania zadań
    return (
        <select className='select' onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Wszystkie</option>
            <option value="finished">Ukończone</option>
            <option value="notfinished">Nieukończone</option>
        </select>
    )
}

export default FilterTasks