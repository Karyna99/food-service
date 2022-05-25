import './App.css';
import Section from './Section';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Popup from './Popup';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <input
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        />
      <Header>
        
      </Header>
      {isOpen && <Popup
        closePopup={togglePopup}
      />}
      <Section
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
