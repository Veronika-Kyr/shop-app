import React from 'react';
import '../assets/styles/navpanel.css'
import { Link, NavLink } from 'react-router-dom';



export default function Navpanel() {

    return (
        <div className='navPanel-content'>
            <ul>
                <li className='panel-list'><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='about'>About us</NavLink> </li>
                <li className='panel-list'><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='plant'>Buy plants! </NavLink> </li>
                <li className='panel-list'><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='advice'>Useful information </NavLink> </li>
                <li className='panel-list'><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='consultation'>Consultations </NavLink></li>
                <li className='panel-list'><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='contact'>Contact & Feedbacks</NavLink></li>

            </ul>
        </div>
    )
}