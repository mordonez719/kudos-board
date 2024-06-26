/*

AllCards

Grid for AddCard button and Card displays
Called in BoardPage
Calls AddCard, Card

*/

import './AllCards.css'
import { useEffect, useState } from 'react'
import Card from './Card';
import AddCard from './AddCard';


function AllCards(props) {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  });

  const fetchCards = () => { // fetches all cards for the board with the given ID
    fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards/${props.id}/cards`)
    .then(response => {
      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
      setCards(data);
    })
    .catch(error => {
      console.error('Error fetching cards:', error);
    });
  };

  // creates a Card for each data point
  const cards_data = cards.map((card, i) => {
    return (
      <Card key={i} id={card.id} votes={card.upvotes} img={card.img} author={card.author} message={card.message}/>
    )
  })


    return (
        <>
            <div className='card-list'>
                <AddCard boardId={props.id}></AddCard>
                {cards_data}
            </div>
        </>
    );
}

export default AllCards;