import {useHistory} from 'react-router-dom'
import {MyContext} from '../store/context'
import {useContext} from 'react'






function Shoes(){

    const { cartItem, updateCartItem } = useContext(MyContext)
    let history = useHistory()

    function OpenAppliancePage(){
        history.push('/appliance')
    }

    return(
        <div>
            <p>this is the shoes page</p>
            <p>Items in Cart : {cartItem}</p>
            <button onClick={updateCartItem}>Add this to shoes cart</button>
            <br/>
            <button onClick={OpenAppliancePage}>Navigate to Appliance section</button>
        </div>
    )

}

export default Shoes;