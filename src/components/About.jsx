import React from 'react';
import '../assets/styles/mainInfo.css';
import nika from "../assets/images/nika.jpg"


export default function About() {

    return (
        <div className='header-content'>
            <h2 className='header-content-head'> Let's get acquainted!</h2>
            <p className='about-content-text'>
                <span className='header-content-span'>FLEURS DE NIKA</span>
                is our amazing online shop, which sells different room plants and flowers.The key feature of our shop is that we provide you with plants which are already adapted to our climate and simple room conditions. Even more, some of them were grown here.
            </p>
            <p className='about-content-text'> Let me intoduce myself. My name is Veronika Kyryloska. I'm a fan of plants and flowers, orchomaniac particularly 😊. </p>
            <div className='about-content-photoFrame'>
                <img className='about-contet-photo' src={nika} alt='photo of the shop owner' />
            </div>

            <p className='about-content-text'>
                The main impulse for this plant shop creating was the fact of dieing of the huge part of my plant collection because of war. Some of my orchids, which partially survived, began growing their orchid kids to continue their living. So, I had pretty big quantity of similar small plants and they gave the idea of such a shop. A small home-scale plant shop in memory of my beloved plants, my hobby.
            </p>
        </div>
    )
}