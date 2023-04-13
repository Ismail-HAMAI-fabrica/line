import './App.css'
import Cards from './component/cards';
import Footer from './component/footer/footer';
import Hero from './component/hero';
import Lghtmodes from './component/lghtmodes';
import Nav from './component/nav';
import Slider from './component/slider';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Lghtmodes/>
      <Hero/>
      <Slider/>
      <Cards/>
      <Footer/>

    </div>
  )
}

export default App
