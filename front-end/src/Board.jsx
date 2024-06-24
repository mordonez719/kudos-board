/*

Board

Model for preview displays on initial page load
Called in AllBoards
Links to details page on click

*/

import './Board.css'
import { Link } from 'react-router-dom'

function Board(props) { 
    const handleDelete = () => { // deletes a Board with the given ID

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
                    <Link to={`/details/${props.id}`}>
                        <button id={props.id}>View</button>
                    </Link>
                    <button onClick={() => handleDelete()}>Delete</button>
            </div>
        </>
    );
}

export default Board;