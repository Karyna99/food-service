import './App.css';
import Section from './Section';
import Button from './Button';

function App() {
  return (
    <Container>
      <Header/>
      <Section
      title="GET FRESH\n FOOD WITHOUT\n LEAVING HOME"
      body={<Button/>}
      />
      <Section/>
      <Section/>
      <Section/>
      <Section/>
      <Section/>
      <Footer/>
    </Container>
  )
}

export default App;
