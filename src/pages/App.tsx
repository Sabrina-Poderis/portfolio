import NavBar from '../components/NavBar';
import MainHero from '../sections/MainHero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Footer from '../components/Footer';
import React from 'react';

function Home() {
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

export default Home;