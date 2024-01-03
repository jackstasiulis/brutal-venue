import { useEffect, useState } from 'react';
import './App.scss';
import './Styles/_variables.scss'
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import ScrollerText from './Components/ScrollerText/ScrollerText';

function App() {
  const initialMode = localStorage.getItem('darkMode') === 'true';
  const [isDarkMode, setDarkMode] = useState(initialMode);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);


  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
          <Hero />
          <ScrollerText />
          <Events />
          <ScrollerText />
          <About />
          <Footer />

    </div>
  );
}

export default App;