import React from 'react';
import S from './Services.module.css';
import { ServicesCards } from './ServicesCards/ServicesCards';


export const Services = (props) => {
    
    let Cards = props.Services
        .map(C => <ServicesCards srcImege={C.srcImege} description={C.description}/>)
    return (
        <div className={S.Services}>
            <div className={S.title}>
                <h2>Услуги</h2>
            </div>

            <div className={S.WrapperCards}>
                {Cards}
            </div>
        </div>
    )
}