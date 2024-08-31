import Banner from "./components/Banner";
import BrandInfo from "./components/BrandInfo";
import Footer from "./components/Footer";
import FruitMenu from "./components/FruitMenu";
import Nav from "./components/Nav";
import OnlineStore from "./components/OnlineStore";
import Parallax from "./components/Parallax";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const App = () =>{

  useEffect(() => {
    AOS.init({
      // Customize AOS options here if needed
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);


  return(
    <>
    <Nav/>
    <Banner />
    <FruitMenu />
    <BrandInfo />
    <OnlineStore />
    <Parallax />
    <Footer />
    </>
  );
}

export default App