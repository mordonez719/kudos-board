import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './BoardPage.css'
import AllCards from '../AllCards'

function BoardPage() {
    const { id } = useParams();
    const [board, setBoard] = useState([]);
    // const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchBoard();
        // fetchCards();
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

//   const fetchCards = () => {
//     fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards/${id}/cards`)
//     .then(response => {
//       if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//     })
//     .then(data => {
//       setCards(data);
//     })
//     .catch(error => {
//       console.error('Error fetching cards:', error);
//     });
//   };

//   fetchBoard();
// console.log(cards)
// console.log(cards[0])
    return (
        <div className="boardmodal">
        <Link to="/">
            <button>Back</button>
        </Link>
        {/* <h1>BOARDDDDD PAGEGEGEUBWL</h1> */}
        <h1 className="boardtitle">{board.title}</h1>
        <h3 className="boardcategory">{board.category}</h3>
        <p className="boardauthor">{board.author}</p>
        {/* <div>
        <h1 className="sa">{cards[0].id}</h1>
        <h3 className="sss">{cards[0].message}</h3>
        <p className="sd">{cards[0].author}</p>
        </div> */}
        <AllCards id={id}></AllCards>
        </div>
    )
}

export default BoardPage