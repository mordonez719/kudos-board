/*

App

Establishes routes from main bage to details page
Calls Menu, AllBoards, BoardPage

*/

import { useEffect, useState } from 'react';
import './App.css';
import Menu from './Menu';
import AllBoards from './AllBoards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoardPage from './Pages/BoardPage.jsx';

function App() {
  const [filter, setFilter] = useState("");

  return (
    <Router>
      <div id="contain-head">
        <header className='head-title'>Kudos Board</header>
      </div>
      <main>
        <Switch>
          <Route exact path="/">
            <Menu setFilter={setFilter} />
            <AllBoards filter={filter} />
          </Route>
          <Route path="/details/:id">
            <BoardPage />
          </Route>
        </Switch>
      </main>
      <footer id="footer-info">© 2024 Kudos Board : Michelle Ordonez</footer>
    </Router>
  );
}

export default App;