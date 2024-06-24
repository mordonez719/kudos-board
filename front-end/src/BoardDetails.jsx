import './BoardDetails.css'

function BoardDetails(props){

    return (props.trigger) ? ( 
        <section className='popup'>
            <div className='popup-content'>
            {props.title}
            <br/><br/>
                <form>
                    <button className='close-popup' onClick={() => props.setTrigger(false)}>
                        Close
                    </button>
                </form>
                <section id="basic-details">
                    <img className="modal-img" src={props.img}></img>
                    <div>
                        <div id="title">
                            {props.title}
                        </div>
                        <div id="author">
                            {props.author}
                        </div>
                        <div id="category">
                            {props.category}
                        </div>
                    </div>
                </section>
                 {props.children}
            </div>
        </section>
    ) : "";

}

export default BoardDetails;