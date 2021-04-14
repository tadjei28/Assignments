import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import {AppContext} from './ContextStore'


function MyLogin(){

    const{contextUsername, setcontextUsername} = useContext(AppContext)

    let history = useHistory();

    const goToMyDashboard = () => {
        history.push('/mydashboard')
    }

    function updateContextUsername(e){
        setcontextUsername(e.target.value)
    }
    return(
        <div>

            <input type="text" placeholder="Username" value={contextUsername} onChange={updateContextUsername}/>
            <button onClick={goToMyDashboard}>Login</button>
        </div>
    )
}

export default MyLogin;