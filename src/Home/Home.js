import '../App.css';
import Header from "../Header/Header";
import Services_home from './Services_home';
import Solution_com from './Solution_com';
import Footer from "../footer/Footer";
import Slider from './Slider';
import Techsoft from './Techsoft';
import Project from './Project';
import Team from './Team';
import Testimonials from './Testimonials';
import Newupdate from './Newupdat';
import Were from './Were';
import Compname from './Compname';


function Home() {
    return (
        <>
            <Header />
            <Slider />            
            <Services_home />
            <Solution_com />
            <Techsoft />
            <Project />
            <Team />
            <Testimonials />
            <Newupdate />
            <Were/>
            <Compname/>
            <Footer />
        </>
    )
}
export default Home;