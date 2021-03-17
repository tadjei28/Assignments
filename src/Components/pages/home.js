
import Button from '../appcomponents/button';

import Navbar from '../appcomponents/navbar'
import { useState } from 'react';
function Home() {
    const [color, setColor] =useState('black')
    const [text, setText] =useState('hello')

    function changeColorText() {
        setColor ('red')
        setText('hi')
        
    }


    return(
        <div>
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button text="Submit" color="#003300"/>


            <Button onClickButton={changeColorText} text={text} color={color}/>

        </div>
    )
}

export default Home;