import './App.css';
import Section from './Section';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Popup from './Popup';
import { useState } from 'react';

function App() {
  

  return (
    <Container> 
     
      <Section
        extraContent={<Header/>}
        title={
          <>
            <p>GET FRESH<br /> FOOD WITHOUT<br />LEAVING HOME</p>
            <button>SUBMIT</button>
          </>
        }
      />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Footer />
    </Container>
  )
}

export default App;
