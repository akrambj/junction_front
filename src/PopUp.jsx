import Stream from './Stream'
function PopUp({setShowPopUp}) {
    return (
        <div style={{position:"absolute", zIndex:10, left:"50%", top:"50%", transform:"translate(-50%,-50%)", height:"600px", width:"600px", background:"red"}}>            
            <button onClick={()=>{setShowPopUp(null)}}>
                X
            </button>
            <h2> PopUp </h2>
            <p> INFO ...</p>
            <Stream uavNumber={1}/>
        </div>
    )
}

export default PopUp