
import Detailcomponent from "./Detailcomponent"

function Dashboardcomponent(props) {
    return(
        <div>
            <div>Dashboard Component</div>
            <Detailcomponent
            studentFirstname={props.Firstname} 
            studentLastname={props.Lastname}
            studentemail={props.email}
            studentdateofbirth={props.dateofbirth}
            studentmobile={props.mobile}
            />

        </div>
    
    )
}
export default Dashboardcomponent;