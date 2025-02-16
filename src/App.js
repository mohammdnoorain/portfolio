import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkDevops from './components/WorkDevops';
import DevOpsTool from './components/DevopsTool';
import DevopsProject from './components/DevopsProject';

function App() {
  return (
    <>
        <Navbar/>
<Hero/>
<About/>
<DevOpsTool/>
<DevopsProject/>
<WorkDevops/>
<Work/>
<Experience/>
<Contact/>
<Footer/>


    </>
  );
}

export default App;
