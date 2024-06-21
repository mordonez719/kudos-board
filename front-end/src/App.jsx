import { useEffect, useState } from 'react'
import './App.css'
import Board from './Board'
import Menu from './Menu'
import AllBoards from './AllBoards'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import HomePage from 'front-end/src/Pages/HomePage.jsx';
// import BoardPage from 'front-end/src/Pages/BoardPage.jsx';

function App() {

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
      <footer id="footer-info">© 2024 Kudos Board : Michelle Ordonez</footer>
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
