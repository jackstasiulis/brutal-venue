import './App.scss';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import ScrollText from './Components/ScrollText/ScrollText';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <ScrollText />
      <Events />
      <About />
      <Footer />

    </div>
  );
}

export default App;