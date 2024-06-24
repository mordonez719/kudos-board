/*

Search

Displays search bar that updates filter for board fetching on change
Called in Menu

*/

import './Search.css'

function Search({setFilter}) {

    function handleSearchChange(e){
        if (e.target.value === ""){
            setFilter("")
        }
        else{
            setFilter(`query/${e.target.value}`)
        }
    }

    return (
        <div className='input-wrapper'>
            <input type="text"
            placeholder="Search boards..." 
            onChange={(e) => handleSearchChange(e)}
            />
        </div>
    )
}

export default Search;