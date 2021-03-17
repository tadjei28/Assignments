
import Notificationcomponent from "./Notificationcomponent";

function Detailcomponent(props) {
    return(
    <Notificationcomponent studentFirstname={props.studentFirstname} 
    studentLastname={props.studentLastname}
    studentemail={props.studentemail}
    studentdateofbirth={props.studentdateofbirth}
    studentmobile={props.studentmobile}
    />
    )
}
export default Detailcomponent;