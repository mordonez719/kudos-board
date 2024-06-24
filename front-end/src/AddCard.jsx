/*

AddCard

Card model for button to create a new card
Called in AllCards
Calls NewCard

*/

import { useEffect, useState } from 'react'
import NewCard from './NewCard'
import './AddCard.css'


function AddCard(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [formData, setFormData] = useState();

    return (
        <>
            <div onClick={() => setButtonPopup(true)} className='new-card-button'>
                    <img className="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png"></img>
                    <p className="card-message">New Card</p>
                    <p className="card-author">You</p>
                    <NewCard boardId={props.boardId} setting={setFormData} trigger={buttonPopup} setTrigger={setButtonPopup}></NewCard>
            </div>
        </>
    );
}

export default AddCard;