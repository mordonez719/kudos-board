import './BoardDetails.css'

function BoardDetails(props){

    // return (props.detailTrigger) ? (
    //     <div className='popup'>
    //         <div className='popup-content'>
    //             <button onClick={() => props.setDetailPopup(false)} className='close-detail-popup'>
    //                 Close
    //                 {/* {console.log(props.setDetailPopup())} */}
    //                 {console.log(props.detailTrigger)}
    //             </button>
    //             <div>
    //                 Heresss
    //             </div>
    //             {/* <img className="modal-img" src={props.img}></img>
    //             <div id="title">
    //                 {props.title}
    //             </div>
    //             <div id="author">
    //                 {props.author}
    //             </div>
    //             <div id="overview">
    //                 {props.desc}
    //             </div>
    //             {props.children} */}
    //         </div>
    //     </div>
    // ) : "";

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
                        <div id="overview">
                            {props.desc}
                        </div>
                    </div>
                </section>
                 {props.children}
            </div>
        </section>
    ) : "";

}

export default BoardDetails;