import './NewBoard.css'

function NewBoard(props){

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        props.setting(formData);
        console.log(formData.get("btitle"));
        console.log(Array.from(formData.entries()));
    
            // console.log("handling")
            fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/boards`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  img: "https://picsum.photos/200/300?random=3",
                  title: formData.get("btitle"),
                  author: formData.get("author"),
                  category: formData.get("cat"),
                  description: formData.get("desc")
                }),
                }
            )
    }

    return (props.trigger) ? ( 
        <section id='form-container'>
            <div id='new-board-form'>
            Create a New Board
            <br/><br/>
            <button type="close" className='close-popup' onMouseDown={() => props.setTrigger(false)}>
                        Close
            </button>
                <form onSubmit={handleSubmit}>
                    <label for="btitle">Title: </label>
                    <input type="text" id="btitle" name="btitle"/>
                        <br/><br/>
                    <label for="desc">Description: </label>
                    <input type="text" id="desc" name="desc"/><br/><br/>
                    <label for="cat">Category: </label>
                    <input type="text" id="cat" name="cat"/>
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

export default NewBoard;