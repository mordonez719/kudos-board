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
                    {/* {console.log("heree at 16")} */}
                    <NewCard boardId={props.boardId} setting={setFormData} trigger={buttonPopup} setTrigger={setButtonPopup}></NewCard>
                    {/* {(formData) ? console.log("yeah"):""} */}
                    {/* {setFormData()} */}
                    {/* {console.log(formData.get("btitle"))} */}
            </div>
        </>
    );
}

export default AddCard;