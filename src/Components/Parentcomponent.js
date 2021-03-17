import Childcomponent from './Childcomponent';

function Parentcomponent(props) {
    
    return(
        <div>
            <div>Parent Component</div>
            <Childcomponent 
            childname={props.name}
            childgender={props.gender}
            childage={props.age}
            childemail={props.email}
            childheight={props.height}
            />

        </div>
        
    )
    
}
export default Parentcomponent;