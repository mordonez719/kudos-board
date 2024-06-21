import { useEffect, useState } from 'react'
import './App.css'
import Board from './Board'
import Menu from './Menu'
import AllBoards from './AllBoards'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import HomePage from 'front-end/src/Pages/HomePage.jsx';
import BoardPage from './Pages/BoardPage.jsx';

function App() {

  return (
    <Router>
      <div id="contain-head">
        <header className='head-title'>Kudos Board</header>
      </div>
      <main>
      <Switch>
        <Route exact path="/">
          <Menu></Menu>
          <AllBoards></AllBoards>
        </Route>
        <Route path="/details/:id">
          <BoardPage></BoardPage>
        </Route>
      </Switch>
      </main>
      <footer id="footer-info">© 2024 Kudos Board : Michelle Ordonez</footer>
    </Router>
  )
}

export default App
