import './App.css';
import Section from './Section';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import ProductsSection from './ProductsSection';

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
      <ProductsSection />
      <Section
        imagePath={"https://i.ibb.co/HFSQRJ5/Screenshot-101-1.png"}
        title={"FRESH BOX SETS"}
      />
      <Section />
      <Section />
      <Section />
      <Footer />
    </Container>
  )
}

export default App;
