import React from 'react';
import "../assets/styles/plantCard.css"



export default function PlantCard(props) {

    return (
        <div className='cardWrap' >
            <div className='plantCardcloseButton'>
                <button className="closeButton" onClick={() => { props.setplantCardVisibility(false) }}>✖</button></div>
            <h2 className='header-content-head'>{props.choosingPlant.plantName}   {props.choosingPlant.sorttName}</h2>
            <div className='plantCardMainContent'>
                <div className='plantphotoCard'>
                    <img className='plantOnCard' src={props.choosingPlant.photo} alt='Plant' />
                </div>
                <div className='plantCardDescription'>
                    <p ><b>This plant has some specific features:</b></p>
                    <div >{props.choosingPlant.features}</div>
                    <p className='plantCardDescriptionItem'><b>The size of this plant is:</b></p>
                    <div >{props.choosingPlant.size}</div>
                </div>
            </div>
            <div className='plantCardBuy'>
                <div>{props.choosingPlant.price} hrn</div>
                <button className='plantCardBasket' onClick={() => props.setNumberOFgoods(props.numberOFgoods + 1)} >🛒</button></div>
        </div>
    )

}

