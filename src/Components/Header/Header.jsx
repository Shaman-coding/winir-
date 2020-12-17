import React from 'react';
import H from './Header.module.css'


const Header = () => {
    return (
        <div className={H.headerWrapper}>
            <div className={H.headerBlocs}>
            
                <div>
                    <img src={'https://i.pinimg.com/originals/88/f1/d7/88f1d7bf39b123373b673d5dac2815e8.jpg'} alt={'tooth'}/>
                </div>

                <div className={'blockdesc'}>
                        <h1>Сеть стоматологических клиник  "Винир+"</h1>
                </div>
            </div>
            <div className={H.line}></div>
         
        </div>
        
    )
}


export default Header;