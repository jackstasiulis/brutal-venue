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
            <a href="#top">
                <div className='navbar__logo'>
                    <h3 className='navbar__logo--text'>LOGO</h3>
                </div>
            </a>
            

            <div className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
                <a href="#events">
                    <div className='navbar__item'>EVENTS</div>
                </a>

                <a href="#about">
                    <div className='navbar__item'>ABOUT</div>
                </a>


                {/* <div className='navbar__item'>Item 3</div> */}
            </div>

            <div className='hamburger-menu' onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
    )
}

export default Navbar;