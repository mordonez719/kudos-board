import './AllBoards.css'
import { useEffect, useState } from 'react'
import Board from './Board';
import AddBoard from './AddBoard';


function AllBoards(props) {
    const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards();
  })

  const fetchBoards = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards/${props.filter}`)
    .then(response => {

      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
      setBoards(data);
    })
    .catch(error => {
      console.error('Error fetching board:', error);
    });
  };

  const boardCards = boards.map((board,i) => {
    return (
      <Board key={i} id={board.id} category={board.category} img={board.img} title={board.title} author={board.author} desc={board.description}/>
    )
  })

    return (
        <>
            <div className='board-list'>
                <AddBoard></AddBoard>
                {boardCards}
            </div>
        </>
    );
}

export default AllBoards;