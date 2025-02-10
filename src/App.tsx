import NavBar from './NavBar';
import MainHero from './MainHero';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import React from 'react';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <MainHero></MainHero>
      
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;