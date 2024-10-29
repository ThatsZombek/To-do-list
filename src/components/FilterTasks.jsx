import react, { useState, useEffect } from 'react'

function FilterTasks({setFilter}) {
    // komponent z wyborem filtrowania zadań
    return (
        // <select className='select' onChange={(e) => setFilter(e.target.value)}>
        //     <option value="all">Wszystkie</option>
        //     <option value="finished">Ukończone</option>
        //     <option value="notfinished">Nieukończone</option>
        // </select>
        <div class="radio-input">
        <label>
        <input type="radio" id="value-1" name="value-radio" value="all" onChange={(e) => setFilter(e.target.value)} defaultChecked/>
        <span>Wszystkie</span>
        </label>
        <label>
            <input type="radio" id="value-2" name="value-radio" value="finished" onChange={(e) => setFilter(e.target.value)}/>
        <span>Ukończone</span>
        </label>
        <label>
            <input type="radio" id="value-3" name="value-radio" value="notfinished" onChange={(e) => setFilter(e.target.value)}/>
        <span>Nieukończone</span>
        </label>
        <span class="selection"></span>
        </div>
    )
}

export default FilterTasks