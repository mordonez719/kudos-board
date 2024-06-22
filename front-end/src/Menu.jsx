import './Menu.css';
import { useEffect, useState } from 'react';
import Search from './Search';
function Menu({ setFilter }) {
    console.log("menu loaded");
    function handleAll() {
        console.log("pressed all");
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