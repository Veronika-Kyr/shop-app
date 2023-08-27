import React, { useState, useEffect } from 'react';
import '../assets/styles/basketModal.css';
import Registration from './Registration';
import { Link } from 'react-router-dom';


export default function BasketModal(props) {
    const [registrationVisibility, setRegistrationVisibility] = useState(false);



    function sumTotal(arr) {
        return arr.reduce((sum, { price }) => sum + Number(price), 0);
    }

    return (
        <div className='header-content'>
            <h2 className='header-content-head'>You have chosen such plants:</h2>
            <div className='plantCartContent'>
                {props.basket.map((cartPlant, index) => {
                    return (
                        <div className='plantCard' key={index}>
                            <div> <img className='cart-plantPhoto' src={cartPlant.photo} alt='plant' /></div>
                            <div>{cartPlant.plantName}</div>
                            <div>{cartPlant.price}</div>
                        </div>)
                })}
                <div>
                    <p>Total {sumTotal(props.basket)}</p>
                </div>
                {/* <button><Link to='registration'>Registration</Link></button>*/}

                <button className='cartBtn' onClick={() => setRegistrationVisibility(true)}>Checkout</button>
                {registrationVisibility && <div className='registration'>
                    <Registration basket={props.basket} />
                </div>}
            </div>
        </div>
    )
}