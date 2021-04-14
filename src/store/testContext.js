import {createContext, useContext, useState} from 'react'

const MyContext = createContext()

function MyContextProvider ({children}){

const [name,updateValue] = useState('Rex')
const [lastname,UpdatelastValue] = useState('Annoh')

  

    return(
        <MyContext.Provider value={{name, updateValue , lastname, UpdatelastValue}}>
            {children}
        </MyContext.Provider>
    )
}

const OurContext = ()=> useContext(MyContext)

export {
    MyContextProvider,
    OurContext

}

