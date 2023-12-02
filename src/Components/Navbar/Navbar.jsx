import './Navbar.scss'
import React, { useState } from 'react';

function Navbar () {
    // create our state var for hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return(
        <nav className='navbar'>
            <div className='navbar__logo'>Your Logo</div>

            <div className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
                <div className='navbar__item'>Item 1</div>
                <div className='navbar__item'>Item 2</div>
                <div className='navbar__item'>Item 3</div>
            </div>

            <div className='hamburger-menu' onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
    )
}

export default Navbar;