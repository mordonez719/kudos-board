import './AllCards.css'
import { useEffect, useState } from 'react'
import Card from './Card';
// import AddBoard from './AddBoard';


function AllCards(props) {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  });

  const fetchCards = () => {
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

//   console.log(cards);
// //   console.log(cards[0]);
//   console.log(props.id);

//   const new_cards = cards.filter(card => card.boardId === props.id);

//   console.log(new_cards);

  const cards_data = cards.map(card => {
    return (
      <Card id={card.id} votes={card.upvotes} img={card.img} author={card.author} message={card.message}/>
    )
  })


    return (
        <>
            <div className='card-list'>
                {/* <AddBoard></AddBoard> */}
                {cards_data}
            </div>
        </>
    );
}

export default AllCards;