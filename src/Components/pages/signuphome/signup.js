import { useState} from 'react';
import './signup.css'

function Signup() {
    
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmpassword,setConfirm]=useState('')



    
    
   
    function updateUsername(e) {
        setUsername(e.target.value)
    }

    function updateEmail(e) {
        setEmail(e.target.value)
    }

    function updatePassword(e) {
        setPassword(e.target.value)
    }

    function updateConfirm(e) {
        setConfirm(e.target.value)
    }

    function submit(e) {
        e.preventDefault()
        // send username and password to the server
        // fetch('google.com'{username,password} )
        // .then(response =>{} )

        // console.log({username, password})
    }


return(
    <form class="main">
        <div class="inputs">
        <div class="form-group">
           <label htmlFor="">Username</label>
           <input type= "text" value={username} onChange={updateUsername} class="form-control"/>

        </div>

        <div class="form-group">
           <label htmlFor="">Email</label>
           <input type= "text" value={email} onChange={updateEmail} class="form-control"/>

        </div >
        
        <div class="form-group">
        <label htmlFor="">Password</label>
        <input type= "password" value={password} onChange={updatePassword} class="form-control"/>

        </div>
        
        <div class="form-group"> 
        <label htmlFor="">Confirm Password</label>
        <input type= "password" value={confirmpassword} onChange={updateConfirm} class="form-control"/>  
        </div>

        <button class="submitbtn">Submit</button>

        </div>
            
    </form>
)
}

export default Signup;  