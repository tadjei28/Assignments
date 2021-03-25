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
            <div class="header">
                <h2>Keith Consults</h2>
                <h4>Create an Account</h4>
            </div>
        <div class="form-group">
           <label htmlFor="">Username</label> 
           <br></br>
           <input type= "text" value={username} onChange={updateUsername} className="form-control" placeholder="Username"/>

        </div>

        <div class="form-group">
           <label htmlFor="">Email</label>
           <br></br>
           <input type= "text" value={email} onChange={updateEmail} className="form-control" placeholder="Email"/>

        </div >
        
        <div class="form-group">
        <label htmlFor="">Password</label>
        <br></br>
        <input type= "password" value={password} onChange={updatePassword} className="form-control" placeholder="Password"/>

        </div>
        
        <div class="form-group"> 
        <label htmlFor="">Confirm Password</label>
        <br></br>
        <input type= "password" value={confirmpassword} onChange={updateConfirm} className="form-control" placeholder="Confirm Password"/>  
        </div>

        <button class="submitbtn">Submit</button>
        <h6>Already have an Account? Log in</h6>

        </div>

        <div className="sidediv" style={{color:"white", font:"bold"}}>
        <h1>Keith consults</h1>
        <h3>We present you with your FIGURES and BEYOND.</h3>
        <h4>Contact Us for all your Accounting and Bookkeeping needs</h4>
        <ul>
            <li>Taxes</li>
            <li>Personal Account</li>
            <li>Financial Statements</li>
            <li>Bookkeeping</li>
            <li>Payroll</li>
            <li>Accounting Softwares</li>
        </ul>

        </div>
            
    </form>
)
}

export default Signup;  