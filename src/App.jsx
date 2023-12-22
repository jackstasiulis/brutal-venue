import './App.scss';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import ScrollerText from './Components/ScrollerText/ScrollerText';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <ScrollerText />
      <Events />
      <About />
      <Footer />

    </div>
  );
}

export default App;