import './Board.css'
import { useEffect, useState } from 'react'
import BoardDetails from './BoardDetails';

function Board(props) {
    // const [detailPopup, setDetailPopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
            <div className='board'>
                    <img className="board-image" src={props.img}></img>
                    <p className="board-title">{props.title}</p>
                    <p className="board-description">{props.desc}</p>
                    <p className="board-author">{props.author}</p>
                    <BoardDetails author={props.author} img={props.img} title={props.title} desc={props.desc} trigger={buttonPopup} setTrigger={setButtonPopup}></BoardDetails>
                    <button onClick={() => setButtonPopup(true)}>View</button>
                    <button>Delete</button>
            </div>
        </>
    );
}

export default Board;