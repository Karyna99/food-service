import './App.css';
import Section, { SectionAbout } from './Section';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import ProductsSection from './ProductsSection';
import AnimatedArrows from './AnimatedArrows';
import BigText from './BigText';
import Stats from './Stats';
import Form from './Form';
import Tabs from './FAQ';

function App() {


  return (
    <Container>
      <Section
        sectionName={"main"}
        imagePath={"https://i.ibb.co/86bkSHv/hand-holding-half-grapefruit-summertime-23-2149390170-min.jpg"}
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
      <ProductsSection
        sectionName={"shop"}
      />
      <Section
        imagePath={"https://i.ibb.co/HFSQRJ5/Screenshot-101-1.png"}
        title={"FRESH BOX SETS"}
        body={<AnimatedArrows />}
      />
      <BigText
        sectionName={"about"}
        title={"ABOUT"}
        name={"header__default"}
      />
      <Section
        imagePath={"https://i.ibb.co/9NGjQSd/flat-lay-vegetables-with-copy-space-1.jpg"}
        body={
          <>
            <Stats
              num={1000}
              description={"deliveries made"}
            />
            <Stats
              num={25}
              description={"cities"}
            />
          </>
        }
      />
      <SectionAbout
        imagePath={"https://i.ibb.co/Ycfkg3s/back.jpg"} />
      <BigText
        sectionName={"faq"}
        title={"FAQ"}
        name={"header__default"}
      />
      <Section
        imagePath={"https://i.ibb.co/hH9FJk9/Screenshot-112.jpg"}
        body={<Tabs />}
      />
      <Section
        imagePath={"https://i.ibb.co/PZ64V8w/Screenshot-1.jpg"}
        body={
          <>
            <BigText
              title={"SUBMIT"}
              name={"header__form"}
            />
            <p>If you need advice or have questions about our products, <br />
              please fill out the form, our manager will contact you</p>
            <Form
              placeholder={"MOBILE NUMBER"}
            />
            <Button
              title={"SUBMIT"}
            />
          </>
        }
      />
      <Footer />
    </Container>
  )
}

export default App;
