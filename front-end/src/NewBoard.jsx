import './NewBoard.css'

function NewBoard(props){

    return (props.trigger) ? ( 
        <section id='form-container'>
            <div id='new-board-form'>
            Create a New Board
            <br/><br/>
                <form>
                    <button className='close-popup' onClick={() => props.setTrigger(false)}>
                        Close
                    </button>
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