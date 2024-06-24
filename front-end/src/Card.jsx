import './Card.css'

function Card(props) {

    const handleDelete = (event) => {

        fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/cards/${props.id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                }
            )
    }

    function handleUpvote(){
        fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/cards/${props.id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "upvotes": !(props.votes)
                  }),
                }
            )
    }

    return (
        <>
            <div className='Card' id={props.id}>
                    <img className="card-image" src={props.img}></img>
                    <p className="card-message">{props.message}</p>
                    <p className="card-author">{props.author}</p>
                    <p className='card-votes'>{props.votes}</p>
                    <button onClick={() => handleUpvote()}>
                        {props.votes ? `Upvoted` : `Upvote`}
                    </button>
                    <button onClick={() => handleDelete()}>Delete</button>
            </div>
        </>
    );
}

export default Card;