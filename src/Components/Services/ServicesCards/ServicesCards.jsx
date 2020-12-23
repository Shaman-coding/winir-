import React from 'react';
import C from './ServicesCards.module.css'



export const ServicesCards = (props) => {

    return (
        <div className={C.ServicesCardsS}>
            <div className={C.img}>
                <img src={props.srcImege}/>
            </div>

            <div className={C.description}>
                <h4> {props.description}</h4> 
            </div>
        </div>
    )
}