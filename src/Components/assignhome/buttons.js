
function Buttons(props) {


    return(
        <button  style={{backgroundColor:'grey',
        color: props.myowncolor,
        width:200,
        height:30}} >
           
           {props.text}

        </button>
            
    )
}

export default Buttons;