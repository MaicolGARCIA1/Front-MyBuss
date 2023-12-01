
import './App.css';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
    <Header></Header>
   <div className='background'>
    <Section></Section>
   </div>
   <Services></Services>
   <AboutUs></AboutUs>
   <Contact></Contact>
   <Footer></Footer>
   </>
  );
}

export default App;
