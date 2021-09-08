import React, { useState } from 'react';
import './header.scss';

//* assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../../assets/thoughts.svg';

const Header = () => {

    let [menu, setMenu] = useState(false);

    const handleMenu = () => setMenu(!menu);

    return <>
        <header className='page-header'>
            <Logo />
            <h2>page title</h2>
            <button type='button' onClick={handleMenu} ><FontAwesomeIcon icon={faBars} /></button>
        </header>
        <nav className={`navigation ${menu && 'open-navigation'}`} >
            <ul>
                <li onClick={handleMenu} >Home</li>
                <li onClick={handleMenu} >Manage thoughts</li>
            </ul>
        </nav>
    </>
}

export default Header;