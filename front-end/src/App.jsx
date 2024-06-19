import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import AllBoards from './AllBoards'

function App() {

  return (
    <>
      <div id="contain-head">
        <header className='head-title'>Kudos Board</header>
      </div>
      <main>
        <Menu></Menu>
        <AllBoards></AllBoards>
      </main>
      <footer id="footer-info">2024 Michelle Ordonez</footer>
    </>
  )
}

export default App
