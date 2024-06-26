/*

NewCard

Displays form for creating a new Card and posts input to the database within its Board on submit
Called in AddCard

*/

import './NewCard.css'
import { useState } from 'react';

function NewCard(props){
    const apiKey = "7PylsrqSXgSB7ztDg62NL68CvfGZyA4u"
    const [searchGif, setSearchGif] = useState("");
    const [ImgURL, setImgURL] = useState("");

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
                  img: ImgURL,
                  author: formData.get("author"),
                  message: formData.get("btitle"),
                  boardId: parseInt(props.boardId)
                }),
                }
            )
    }

    const handleSearch = async (event) => {

        const gifQuery = event.target.value;
        setSearchGif(gifQuery);
        if (!gifQuery.trim()) return;
        const api_key = apiKey
        var query = gifQuery
        try {
            console.log("hereee")
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=6&offset=0&rating=g&lang=en`);
            console.log("response: ")
            console.log(response);
            const data  = await response.json();
            console.log("data: ")
            console.log(data);
            if (data.data.length > 0) {
                setImgURL(data.data[0].images.original.url);
            }
        }
        catch (error) {
            console.error("Error searching for GIFs:")
        }
        console.log("searching")
        console.log(ImgURL)
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