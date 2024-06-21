import './Board.css'
// import { useEffect, useState } from 'react'
// import BoardDetails from './BoardDetails';
import { Link } from 'react-router-dom'

function Board(props) {
    // const [detailPopup, setDetailPopup] = useState(false);
    // const [buttonPopup, setButtonPopup] = useState(false);

    const handleDelete = () => {
        // event.preventDefault();

        fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards/${props.id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                }
            )
    }

    return (
        <>
            <div className='board' id={props.id}>
                    <img className="board-image" src={props.img}></img>
                    <p className="board-title">{props.title}</p>
                    <p className="board-description">{props.desc}</p>
                    <p className="board-author">{props.author}</p>
                    {/* <BoardDetails author={props.author} img={props.img} title={props.title} desc={props.desc} trigger={buttonPopup} setTrigger={setButtonPopup}></BoardDetails> */}
                    <Link to={`/details/${props.id}`}>
                        <button id={props.id}>View</button>
                    </Link>
                    <button onClick={() => handleDelete()}>Delete</button>
            </div>
        </>
    );
}

export default Board;