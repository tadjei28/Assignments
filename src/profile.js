import {useContext} from 'react';
import { useOurContext } from './store/loginContext';


function Profile(){

    const {username} =  useOurContext()

    return(
        <div style={{background:'grey' , height:700,display: 'flex',flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
            <h1> Profile</h1>
            <h2>Username:{username}</h2>

        </div>
    )
}

export default Profile;