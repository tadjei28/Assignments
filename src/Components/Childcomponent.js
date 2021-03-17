

function Childcomponent(props) {
    return(
        <div>
            <div>Child Component</div>
            <h1>name: {props.childname}</h1>
            <h2>gender:{props.childgender} </h2>
            <h2> age: {props.childage} </h2>
            <h2>email: {props.childemail} </h2>
            <h2>height:{props.childheight} </h2>

        </div>
    
    )
}
export default Childcomponent;