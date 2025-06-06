import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import WeatherCard from '../WeatherCard/WeatherCard';

function App() {

  return (
    <div className='page'>
     <div className='page__content'>
      <Header />
      <WeatherCard />
      <Footer />
      </div>
    </div>
  )
}

export default App
