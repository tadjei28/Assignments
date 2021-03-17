// import { useState } from 'react';
import './assignhome.css';
import Buttons from '../assignhome/buttons';
import Inputfield from './inputfield';
import Typography from './typography';
import Textarea from './textarea';
import Selectoption from './selectoption';


function Ashome(props) {


    return (
        <div className='body'>

            <div>
                <nav style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Keith Trust Accountancy</h1>
                    <ul style={{ display: 'flex', displayDirection: 'column', listStyle: 'none' }}>
                        <li style={{ margin: 10 }}>Home</li>
                        <li style={{ margin: 10 }}>About Us</li>
                        <li style={{ margin: 10 }}>Contact Us</li>


                    </ul>
                </nav>
            </div>
            <div style={{ displayDirection: 'column', margin:20 }}>
                <div>
                    <button className='loginbutton'>Username</button>
                    <button className='loginbutton'>password</button>
                </div>

                <div>
                    <Buttons text='Login' myowncolor='white' />
                    <Buttons text='Signout' myowncolor='white' />
                </div>

            </div>


            <div>
            <div>
                <Inputfield myinputtype='text' />
                <span>Company Name</span>
            </div>

            <div>
                <Inputfield myinputtype='text' />
                <span>Address</span>
            </div>

            <div>
                <Inputfield myinputtype='text' />
                <span>Location</span>
            </div>
            </div>




            <div style={{margin:20}}>
                <div>

                    <Inputfield myinputtype='checkbox' />
                    <span>Balance Sheet</span>

                </div>

                <div>
                    <Inputfield myinputtype='checkbox' />
                    <span>Profit and Loss Statemet</span>

                </div>

                <div>
                    <Inputfield myinputtype='checkbox' />
                    <span>Stock Audit</span>
                </div>
            </div>


            <div>
                <Inputfield myinputtype='radio' />
                <span style={{margin:50}}>Limited Liability Company</span>

                <Inputfield myinputtype='radio' />
                <span style={{margin:50}}>Patnership</span>

                <Inputfield myinputtype='radio' />
                <span style={{margin:50}}>Small and Medium Scale Enterprise</span>

            </div>

            <div>
                <Typography text='Contact us for all your Bookeeping and Audit Services. We give you freedom from your financial captivity.' mytypographycolor='red' />
            </div>

            <div style={{display:'flex', flexDirection:'column', margin:10}}>
                <label>Indicate the kind of services you will require here below:</label>
                <Textarea style={{width:50, innerHeight:150, margin:10}} />
                <Buttons text='Submit'/>
            </div>

            <div style={{ justifyContent:'center', alignContent:'center', backgroundColor:'black'}}>
                <div style={{display:'flex'}}>
                <h5 style={{ color:'red',marginBottom:0, marginTop:0}}>Service period request</h5>

                </div>

                <div>
                <Selectoption firstoption='Annually' secondoption='Semi-Annually' thirdoption='Quarterly' finaloption='Monthly'  />

                </div>
                
                
            </div>


           

        </div>

    )

}
export default Ashome;