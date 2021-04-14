import {createContext,useState, useContext} from 'react'
import Login from '../login'
import Profile from '../profile'

 const OurContext = createContext();



function OurContextProvider ({children}){
    const [username, setUsername] = useState("")
    const [showProfile, setProfile] = useState(false)
    
    return(
        <>
            <OurContext.Provider value={{username,  setUsername, showProfile, setProfile}}>
            {children }
            </OurContext.Provider>
            
        </>

    )

}

const useOurContext = () =>  useContext(OurContext)
export{
    useOurContext,
    OurContextProvider
}

