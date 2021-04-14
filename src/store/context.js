import {createContext, useState} from 'react'

const MyContext = createContext();

function MyProvider (props){
    const [cartItem, setCartItem] = useState(0)

    function updateCartItem(){
        let newitem = cartItem + 1
        setCartItem(newitem)
    }


    return(
        <MyContext.Provider value={{cartItem, setCartItem,updateCartItem}}>

            {props.children}

        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}