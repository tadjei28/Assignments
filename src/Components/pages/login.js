import { useState,useEffect } from 'react';
import './login.css'

function Login() {
    
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    useEffect(()=>{
        console.log('initializing Component.....')

        return ()=>{console.log('stoping login component');
    }




    }, [] )

    useEffect(()=>{
        console.log('change my password')
    }, [password] )
    
   
    function updateUsername(e) {
        setUsername(e.target.value)
    }

    function updatePassword(e) {
        setPassword(e.target.value)
    }

    function submit(e) {
        e.preventDefault()
        // send username and password to the server
        // fetch('google.com'{username,password} )
        // .then(response =>{} )

        // console.log({username, password})
    }


return(
    <form>
        <div class="form.group">
           <label htmlFor="">Username</label>
           <input type= "text" value={username} onChange={updateUsername} class="form-control"/>

        </div>

        <div class="form.group">
           <label htmlFor="">Password</label>
           <input type= "password" value={password} onChange={updatePassword} class="form-control"/>

        </div>

        <button class="login-btn">Login</button>
        <button class="cancel-btn">Cancel</button>

        
            
    </form>
)



}

export default Login;  