import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'




const Header = () => {

    const navBars = () => (

        <div className={style.bars}>
             <FontAwesomeIcon icon={faBars} 
             style={{
                 color:'#dfdfdf',
                 padding:'10px',
                 cursor:'pointer'
             }}/>
        </div>
    )
    const logo = () => (

        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>

    )

    return (
        <header className={style.header}>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>

        </header>
    )
}
export default Header;