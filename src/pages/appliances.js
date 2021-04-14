import {useHistory} from 'react-router-dom'
import {MyContext} from '../store/context'
import {useContext} from 'react'




function Appliance(){
    let history = useHistory()
    
    function OpenShoesPage(){
        history.pushState('/shoes')
    }


    const {cartItem, updateCartItem} = useContext(MyContext)

    return(
        <>
        <p>Cart: </p>
        <p>Items in Cart : {cartItem} </p>

        <button onClick={updateCartItem}>Add this appliance to cart</button>

        <br/>

        <button onClick= {OpenShoesPage}>Navigate to appliance section</button>
    </>
    )

}

export default Appliance;