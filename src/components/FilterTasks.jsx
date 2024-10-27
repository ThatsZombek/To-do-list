import react, { useState, useEffect } from 'react'

function FilterTasks({setFilter}) {
    // nie wiem czy działa
    return (
        <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Wszystkie</option>
            <option value="finished">Ukończone</option>
            <option value="notfinished">Nieukończone</option>
        </select>
    )
}

export default FilterTasks