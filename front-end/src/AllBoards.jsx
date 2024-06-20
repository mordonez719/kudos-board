import './AllBoards.css'
import { useEffect, useState } from 'react'
import Board from './Board';
import AddBoard from './AddBoard';


function AllBoards() {
    // const [buttonPopup, setButtonPopup] = useState(false);
    const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards();
  })

  const fetchBoards = () => {
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards`)
    .then(response => {
      // console.log(response)

      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
      // console.log("here")
      // console.log(data);
      setBoards(data);
    })
    .catch(error => {
      console.error('Error fetching board:', error);
    });
  };

  const boardCards = boards.map(board => {
    return (
      <Board img={board.img} title={board.title} author={board.author} desc={board.description}/>
    )
  })

  const handleCreateBoard = () => {
    // console.log("handling")
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: "https://picsum.photos/200/300?random=3",
          title: "what is this",
          author: "me random",
          description: "random desc"
        }),
        }
    )

    .then(response => {
      // console.log("handling")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // console.log("handling")
      fetchBoards();
    })
    .catch(error => {
      console.error('Error fetching board:', error);
  });
  }
    return (
        <>
            <div className='board-list'>
                {/* <button onClick={handleCreateBoard}>Create</button> */}
                <AddBoard></AddBoard>
                {boardCards}
                <Board img="/Users/mordonezcampos/Desktop/codepath/flixster-starter/public/movie.png" title="My Test Board" desc="This is a test board" author="Me"></Board>
            </div>
        </>
    );
}

export default AllBoards;