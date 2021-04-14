import { createContext, useState } from "react";


const AppContext = createContext();


function AppProvider(props){

    const [contextUsername, setcontextUsername ] = useState('')
    return(
        <div>

            <AppContext.Provider value={{contextUsername, setcontextUsername}}>
                {props.children}
            </AppContext.Provider>

            
        </div>
    )
}

export { AppContext, AppProvider }