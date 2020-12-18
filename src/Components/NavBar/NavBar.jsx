import React from 'react';
import N from './NavBar.module.css';
import {NavLink} from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className={N.WrapperNav}>

            <div className={N.NavItem}>
                <NavLink activeClassName={N.active} to={'/about'}>О нас</NavLink>
            </div>

            <div className={N.NavItem}>
                <NavLink activeClassName={N.active} to={'/Services'}>Услуги</NavLink>
            </div>

            <div className={N.NavItem}>
                <NavLink activeClassName={N.active} to={'/Specialists'}>Специалисты</NavLink>
            </div>

            <div className={N.NavItem}>
                <NavLink activeClassName={N.active} to={'/Contacts'}>Контакты</NavLink>
            </div>
         
        </div>
    )
}

