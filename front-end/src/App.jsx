import { useEffect, useState } from 'react'
import './App.css'
import Board from './Board'
import Menu from './Menu'
import AllBoards from './AllBoards'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import HomePage from 'front-end/src/Pages/HomePage.jsx';
// import BoardPage from 'front-end/src/Pages/BoardPage.jsx';

function App() {
  // const [boards, setBoards] = useState([]);

  // useEffect(() => {
  //   fetchBoards();
  // })

  // const fetchBoards = () => {
  //   fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards`)
  //   .then(response => {
  //     // console.log(response)

  //     if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   return response.json();
  //   })
  //   .then(data => {
  //     // console.log("here")
  //     // console.log(data);
  //     setBoards(data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching board:', error);
  //   });
  // };

  // const boardCards = boards.map(board => {
  //   return (
  //     <Board img={board.img} title={board.title} author={board.author} desc={board.description}/>
  //   )
  // })

  // const handleCreateBoard = () => {
  //   // console.log("handling")
  //   fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         img: "https://picsum.photos/200/300?random=3",
  //         title: "what is this",
  //         author: "me random",
  //         description: "random desc"
  //       }),
  //       }
  //   )

  //   .then(response => {
  //     // console.log("handling")
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     // console.log("handling")
  //     fetchBoards();
  //   })
  //   .catch(error => {
  //     console.error('Error fetching board:', error);
  // });
  // }

  return (
    <>
      <div id="contain-head">
        <header className='head-title'>Kudos Board</header>
      </div>
      <main>
        <Menu></Menu>
        {/* <button onClick={handleCreateBoard}>Create</button>
        {boardCards} */}
        <AllBoards></AllBoards>
      </main>
      <footer id="footer-info">2024 Michelle Ordonez</footer>
    </>

    // <Router>
    //   <Routes>
    //     <Route path = "/home" element={<HomePage />} />
    //     <Route path = "/board" element={<BoardPage />} />
    //   </Routes>
    // </Router>
    
    // <div>
    //   <button onClick={handleCreateBoard}>Create</button>
    //   {/* <button onClick={fetchBoards}>Create</button> */}

    //   {boardCards}
    // </div>
  )
}

export default App
