import './AllBoards.css'
import { useEffect, useState } from 'react'
import Board from './Board';
import AddBoard from './AddBoard';


function AllBoards() {
    // const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
            <div className='board-list'>
                <AddBoard></AddBoard>
                <Board img="/Users/mordonezcampos/Desktop/codepath/flixster-starter/public/movie.png" title="My Test Board" desc="This is a test board" author="Me"></Board>
            </div>
        </>
    );
}

export default AllBoards;