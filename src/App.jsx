import './App.scss';
import Events from './Components/Events/Events';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Events />

    </div>
  );
}

export default App;