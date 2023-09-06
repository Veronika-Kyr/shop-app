import React from 'react';
import '../assets/styles/mainInfo.css';
import nika from "../assets/images/nika.jpg"


export default function About() {

    return (
        <div className='header-content'>
            <h2 className='header-content-head'> Let's get acquainted!</h2>
            <p className='about-content-text'>
                <span className='header-content-span'>FLEURS DE NIKA</span>
                is our amazing online shop, which sells different room plants and flowers.The key feature of our shop is that we provide you with plants which have already adapted to our climate and simple room conditions. Even more some of them were growed here.
            </p>
            <p className='about-content-text'> Let me intoduce myself. My name is Veronika Kyryloska. I'm a fan of plants and flowers, orchomaniac particularly 😊. </p>
            <div className='about-content-photoFrame'>
                <img className='about-contet-photo' src={nika} alt='photo of the shop owner' />
            </div>

            <p className='about-content-text'>
                The main impulse of creating my plant shop was dieing of the huge part of my plant collection because of war. Some of my partially survived orchids began to give me their orchid kids to continue their living. So, I had pretty big quantity of similar small plants and they gave the idea of such a shop. A small home-scale plant shop in memory of my beloved plants, my hobby.
            </p>
        </div>
    )
}