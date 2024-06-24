import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './BoardPage.css'
import AllCards from '../AllCards'

function BoardPage() {
    const { id } = useParams();
    const [board, setBoard] = useState([]);

    useEffect(() => {
        fetchBoard();
    }, []);

  const fetchBoard = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards/${id}`)
    .then(response => {
      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
      setBoard(data);
    })
    .catch(error => {
      console.error('Error fetching board:', error);
    });
  };

    return (
        <div className="boardmodal">
        <Link to="/">
            <button>Back</button>
        </Link>
        <h1 className="boardtitle">{board.title}</h1>
        <h3 className="boardcategory">{board.category}</h3>
        <p className="boardauthor">{board.author}</p>
        <AllCards id={id}></AllCards>
        </div>
    )
}

export default BoardPage