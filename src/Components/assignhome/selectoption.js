function Selectoption(props) {


    return(
        <select>
            <option value='firstoption'>Annually</option>
            <option value='secondoption'>Semi-Annually</option>
            <option value='thirdoption'>Quarterlly</option>
            <option value='finaloption'>Monthly</option>
           {props.Selectoption}
        </select>
    )
}

export default Selectoption;