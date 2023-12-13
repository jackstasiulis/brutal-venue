import './App.scss';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import ScrollText from './Components/ScrollText/ScrollText';
import ScrollerText from './Components/ScrollerText/ScrollerText';
import ScrollingText from './Components/ScrollingText/ScrollingText';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      {/* <ScrollText /> */}
      {/* <ScrollingText /> */}
      <ScrollerText />

      <Events />
      <About />
      <Footer />

    </div>
  );
}

export default App;