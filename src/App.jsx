import './App.scss';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Events />
      <About />

    </div>
  );
}

export default App;