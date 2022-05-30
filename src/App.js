import './App.css';
import Section from './Section';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import ProductsGrid from './ProductsGrid';

function App() {


  return (
    <Container>
      <Section
        imagePath={"https://i.ibb.co/b6PzTFv/hand-holding-half-grapefruit-summertime-23-2149390170-2.png"}
        extraContent={<Header />}
        title={
          <>
            <p>GET FRESH<br /> FOOD WITHOUT<br />LEAVING HOME</p>
            <Button
              title={"SUBMIT"}
            />
          </>
        }
      />
      <ProductsGrid />
      <Section />
      <Section />
      <Section />
      <Section />
      <Footer />
    </Container>
  )
}

export default App;
