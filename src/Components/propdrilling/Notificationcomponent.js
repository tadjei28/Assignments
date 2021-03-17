
import Profilecomponent from "./Profilecomponent";
function Notificationcomponent(props) {
    return(
        <div>
            <Profilecomponent studentFirstname={props.studentFirstname} 
    studentLastname={props.studentLastname}
    studentemail={props.studentemail}
    studentdateofbirth={props.studentdateofbirth}
    studentmobile={props.studentmobile}
    />
        </div>

    )
}
export default Notificationcomponent;