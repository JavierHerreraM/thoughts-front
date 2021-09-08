import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './header.scss';

//* assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../../assets/thoughts.svg';

const Header = () => {

    let location = useLocation().pathname;
    // * First, divides the path by the / and grabs the second value of the array, then, if it has words separated by -
    // * it is divided again and join to use it as the title, and the first character is make uppercase
    location = location.split('/')[1].split('-').join(' ');
    location = location.charAt(0).toUpperCase() + location.slice(1);

    // * States
    let [menu, setMenu] = useState(false);

    // * opens and closes the navigation menu
    const handleMenu = () => setMenu(!menu);

    return <>
        <header className='page-header'>
            <Logo />
            <h2>{location}</h2>
            <button type='button' onClick={handleMenu} ><FontAwesomeIcon icon={faBars} /></button>
        </header>
        <nav className={`navigation ${menu && 'open-navigation'}`} >
            <ul>
                <li onClick={handleMenu} ><Link to='/' >Home</Link></li>
                <li onClick={handleMenu} ><Link to='/Thoughts' >Thoughts</Link></li>
            </ul>
        </nav>
    </>
}

export default Header;