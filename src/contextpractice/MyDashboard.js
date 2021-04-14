import {useContext} from 'react'
import{AppContext} from './ContextStore'

function MyDashboard (){

    const{contextUsername, setcontextUsername} = useContext(AppContext)
    return(
        <div>

            <p> Hello, you are logged in as : {contextUsername}</p>

        </div>
    )
}

export default MyDashboard;