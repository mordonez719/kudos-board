/*

Menu

Creates and handles buttons for filtering, setting the filter use variable on each click
Called in App
Calls Search

*/

import './Menu.css';
import Search from './Search';
function Menu({ setFilter }) {
    function handleAll() {
        setFilter("");
    }
    return (
        <>
            <Search setFilter={ setFilter } />
            <section className='menu-buttons'>
                <button onClick={handleAll}>
                    All
                </button>
                <button onClick={() => setFilter("recent")}>
                    Recent
                </button>
                <button onClick={() => setFilter("filter/Celebration")}>
                    Celebration
                </button>
                <button onClick={() => setFilter("filter/Thank You")}>
                    Thank You
                </button>
                <button onClick={() => setFilter("filter/Inspiration")}>
                    Inspiration
                </button>
            </section>
        </>
    );
}
export default Menu;