import './Search.css'
import { useEffect, useState } from 'react'

function Search() {

    return (
        <div className='input-wrapper'>
            <input type="text"
            placeholder="Search boards..." />
        </div>
    )
}

export default Search;