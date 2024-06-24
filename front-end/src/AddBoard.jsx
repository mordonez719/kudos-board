/*

AddBoard

Board model for button to create a new board
Called in AllBoards
Calls NewBoard

*/

import { useEffect, useState } from 'react'
import NewBoard from './NewBoard'
import './AddBoard.css'


function AddBoard() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [formData, setFormData] = useState();

    return (
        <>
            <div onClick={() => setButtonPopup(true)} className='new-board-button'>
                    <img className="board-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png"></img>
                    <p className="board-title">New Board</p>
                    <p className="board-description">Click to create a new board</p>
                    <p className="board-author">You</p>
                    <NewBoard setting={setFormData} trigger={buttonPopup} setTrigger={setButtonPopup}></NewBoard>
            </div>
        </>
    );
}

export default AddBoard;