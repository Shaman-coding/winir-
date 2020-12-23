import React from 'react';
import T from './Specialist.module.css';



export const SpecialistCards = (props) => {
    debugger;
    return (
        <div className={T.wrapperDoctor}>
            <div className={T.winirDoc}>
                 <div className={T.imgPhoto}>
                    <img src={props.docImege}/>
                </div>  
                               
                            
                 <div className={T.InfoAboutDoc}>
                    <h5>{props.name}</h5> 
                    <p>{props.diploma} <br/>
                       {props.certificate}</p>
                 </div>
            </div>
                    
        </div>
    )
}