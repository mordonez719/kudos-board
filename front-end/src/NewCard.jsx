import './NewCard.css'

function NewCard(props){
    // console.log(props.boardId);

    const handleSubmit = (event) => {
        console.log("submitting new card")
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        props.setting(formData);
        // console.log(formData.get("btitle"));
        console.log(Array.from(formData.entries()));
            // console.log("handling")
            fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards/cards`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  img: "https://picsum.photos/200/300?random=3",
                  author: formData.get("author"),
                  message: formData.get("btitle"),
                  boardId: parseInt(props.boardId)
                }),
                }
            )
    }

    return (props.trigger) ? ( 
        <section id='form-container'>
            <div id='new-board-form'>
            Write a New Card
            <br/><br/>
            <button type="close" className='close-popup' onMouseDown={() => props.setTrigger(false)}>
                        Close
            </button>
                <form onSubmit={handleSubmit}>
                    <label for="btitle">Message: </label>
                    <input type="text" id="btitle" name="btitle"/>
                        <br/><br/>
                    <label for="img">Image: </label>
                    <input type="text" id="img" name="img"/><br/><br/>
                    <label for="author">Author (optional): </label>
                    <input type="text" id="author" name="author"/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    ) : "";
}

export default NewCard;