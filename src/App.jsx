import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import MainBox from './components/MainBox'
import Navpanel from './components/Navpanel'
import { Outlet } from 'react-router-dom';

// import About from './About';
import './assets/styles/mainBox.css'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleBurger() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='main-content'>

        <button className='burger' title='Menu' onClick={toggleBurger}>🍀</button>

        <div className={isOpen ? 'open' : 'close'}   >
          <Navpanel />
        </div>
        <div className='main-content-nav'   >
          <Navpanel />
        </div>
        <div className='main-content-infobox'>
          <Outlet />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>

    </div>
  )
}

export default App
