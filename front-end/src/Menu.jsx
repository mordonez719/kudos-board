import './Menu.css'
import { useEffect, useState } from 'react'
import Search from './Search';

function Menu() {
    return (
        <>
            <Search>
            </Search>
            <section className='menu-buttons'>
                <button>
                    All
                </button>
                <button>
                    Recent
                </button>
                <button>
                    Celebration
                </button>
                <button>
                    Thank You
                </button>
                <button>
                    Inspiration
                </button>
            </section>
        </>
    );
}

export default Menu;