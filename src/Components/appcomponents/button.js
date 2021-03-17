function Button(props){


    return (
        <button 
        style={{backgroundColor: props.color}}
        onClick={props.onClickButton}
        > 
        
        {props.text} 
        
        </button>
    )
}


export default Button