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

  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className='main-content'>
        <div className='main-content-nav'>
          <Navpanel />
        </div>
        <div className='main-content-infobox'>
          <Outlet />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>

    </>
  )
}

export default App
