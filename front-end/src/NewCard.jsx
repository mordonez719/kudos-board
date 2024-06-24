/*

NewCard

Displays form for creating a new Card and posts input to the database within its Board on submit
Called in AddCard

*/

import './NewCard.css'
const apiKey = "7PylsrqSXgSB7ztDg62NL68CvfGZyA4u"

function NewCard(props){

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        props.setting(formData);
            fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards/cards`, // posts new card to the database
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

    const handleSearch = async (event) => { // finds GIF for Card display
        const gifQuery = event.target.value;
        setSearchGif(gifQuery);
        if (!gifQuery.trim()) return;
        const params = new URLSearchParams({
            api_key: apiKey,
            query: gifQuery,
            limit: 25
        });
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?${params.toString()}`);
            const data  = await response.json();
            if (data.data.length > 0) {
                setImgURL(data.data[0].images.original.url);
            }
        }
        catch (error) {
            console.error("Error searching for GIFs:")
        }
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
                    <input type="text" id="img" name="img" onChange={handleSearch}/><br/><br/>
                    <label for="author">Author (optional): </label>
                    <input type="text" id="author" name="author"/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    ) : "";
}

export default NewCard;