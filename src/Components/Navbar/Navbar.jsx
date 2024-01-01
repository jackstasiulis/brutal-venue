import DarkLightToggle from '../DarkLightToggle/DarkLightToggle';
import './Navbar.scss'
import React, { useEffect, useState } from 'react';

function Navbar ({isDarkMode, toggleTheme}) {
    // state var for HAMBURGER menu
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    
    //   if (window.innerWidth <= 768) {
    //     setMenuOpen(!menuOpen);
    //   } else {
    //     setMenuOpen(false)
    //     console.log('menuCLOSED')
    //   }
    };


    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            // Only set menu state to true if the screen width is less than or equal to 768 pixels
            setMenuOpen();
          } else {
            // Set menu state to false if the screen width exceeds 768 pixels
            setMenuOpen(false);
          }
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Initial call to handleResize to set the initial state based on the window width
        handleResize();
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array ensures that the effect

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