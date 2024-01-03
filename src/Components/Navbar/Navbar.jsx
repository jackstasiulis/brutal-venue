import DarkLightToggle from '../DarkLightToggle/DarkLightToggle';
import './Navbar.scss'
import React, { useEffect, useState } from 'react';

function Navbar ({isDarkMode, toggleTheme}) {
    // state var for HAMBURGER menu
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    // for closing the menu when screen exceeds tablet size
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setMenuOpen();
          } else {
            setMenuOpen(false);
          }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <a href="#top">
                <div className='navbar__logo'>
                    <h3 className={`navbar__logo--text ${menuOpen ? 'open' : ''}`}>racecar</h3>
                </div>
            </a>

            {/* Dark/Light mode toggle switch component */}
            

            <div className={`navbar__menu ${menuOpen ? 'open' : ''}`}>

                <DarkLightToggle  isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>

                <a href="#events">
                    <div className='navbar__item'>EVENTS</div>
                </a>

                <a href="#about">
                    <div className='navbar__item'>ABOUT</div>
                </a>
            </div>

            <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {/* Hamburger SVG */}
                &#9776;
            </div>
        </nav>
    )
}

export default Navbar;