import React from 'react';
import '../assets/styles/navpanel.css'
import { Link } from 'react-router-dom';



export default function Navpanel() {

    return (
        <div className='navPanel-content'>
            <ul>
                <li><Link to='about'>About us</Link> </li>
                <li><Link to='plant'>Plants </Link> </li>
                <li><Link to='advice'>Useful information </Link> </li>
                <li><Link to='consultation'>Consultations </Link></li>
                <li><Link to='contact'>Contacts and Feedbacks </Link></li>

            </ul>
        </div>
    )
}