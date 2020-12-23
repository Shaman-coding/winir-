import React from 'react';
import C from './Specialists.module.css';
import { SpecialistCards } from './SpecialistsCards/SpecialistCards';

export const Specialists = (props) => {
    debugger;

    let SpecialistBlock = props.Specialist.SpecialistsWinir
            .map(M => <SpecialistCards docImege={M.docImege}
                             name={M.name}
                             diploma={M.diploma}
                             certificate={M.certificate}/>)

    let SpecialistKolibry = props.Specialist.SpecialistKolibri
        .map(B => <SpecialistCards docImege={B.docImege}
                                   name={B.name}
                                   diploma={B.diploma}
                                   certificate={B.certificate} />)

    return (
        <div className={C.Specialists }>
           <div className={C.title}><h2>Специалисты</h2></div>

           <div className={C.subtitle}>
                <h4>Информация о врачах OOO "ВИНИР+"</h4>
           </div>

                <div className={C.wrapperWinir}> 
                    {SpecialistBlock}
                </div>

            <div className={C.subtitleKolibri}>
                <h4>Информация о врачах OOO "КОЛИБРИ"</h4>
           </div>

                <div className={C.wrapperWinir}>
                    {SpecialistKolibry}
            </div>
    </div>
    )
}