import {useContext} from 'react'
import Profile from './profile';
import { useOurContext} from './store/loginContext';

function Login(){
    const {setUsername,setProfile , showProfile} = useOurContext()
    console.log(showProfile)
    

    return(
        
        <div>
            {showProfile ? <Profile/> : <div style={{backgroundColor:'dodgerblue',height:700, display: 'flex',flexDirection: 'column',alignItems:'center', justifyContent: 'center' }}>
            <div style={{}}>
            <input type="text" placeholder="Username..." onChange={(event)=>{setUsername(event.target.value);}}/>
            <br/>
            <input type="text" placeholder="Password..."/>
            <br/>
            <button onClick={()=> {setProfile(true)}}> LOGIN </button>
            
            </div>

        </div>}
        </div>
    )
}

export default Login;