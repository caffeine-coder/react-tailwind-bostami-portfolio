import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/ProfileContainer/ProfileContainer';
import About from './Components/About/About';
import './App.css';


function App() {
  return (
    <>
    <Navbar />
    <ProfileContainer/>
    <About/>
    </>
  )
}


export default App;
