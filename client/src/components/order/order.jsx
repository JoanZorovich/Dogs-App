import React from 'react'
import { useDispatch } from 'react-redux';
import { orderAZ, orderWeight } from '../../actions/actions'
import './order.css'

function Order() {

    const dispatch = useDispatch();

    function handleOrderAZ (e) {
        dispatch(orderAZ(e.target.value));
    }

    function handleOrderWeight(e) {
        dispatch(orderWeight(e.target.value))
    }

    return (
        <div className="mainFilter">
            <h3>ORDER</h3>
               <form className="formContainer">
                <p className="text">Alphabetically</p>
                <select  onChange={handleOrderAZ} className="select">
                    <option value=''>Select</option>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>
            </form> 

            <form className="formContainer">
                <p className="text">By weight</p>
                <select  onChange={handleOrderWeight} className="select">
                    <option value=''>Select</option>
                    <option value="MIN_MAX">MIN - MAX</option>
                    <option value="MAX_MIN">MAX - MIN</option>
                </select>
            </form>
            
        </div>
    )
}

export default Order
