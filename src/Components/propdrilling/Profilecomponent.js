

function Profilecomponent(props) {
    return(
        <div>
             <h1>Firstname: {props.studentFirstname}</h1>
             <h1>Lastname: {props.studentLastname}</h1>
             <h2>Email: {props.studentemail}</h2>
             <h2>Date of birth: {props.studentdateofbirth}</h2>
             <h2>Mobile: {props.studentmobile}</h2>

        </div>
   
    )
}
export default Profilecomponent;