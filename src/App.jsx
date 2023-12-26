import { useEffect, useState } from 'react';
import './App.scss';
import './Styles/_variables.scss'
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import ScrollerText from './Components/ScrollerText/ScrollerText';
import DarkLightToggle from './Components/DarkLightToggle/DarkLightToggle';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };


  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

        {/* <ThemeToggle toggleTheme={toggleTheme} /> */}

          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
          <Hero />
          <ScrollerText />
          <Events />
          {/* <DarkLightToggle  /> */}
          <ScrollerText />
          <About />
          <Footer />


    </div>
  );
}

export default App;