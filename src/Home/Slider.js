import '../App.css';
import { Container } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider1 from "../image/s-1.jpg";
import slider2 from "../image/s-2.jpg";
import slider3 from "../image/s-3.jpg";

function Slider() {
    return (
        <>
            <section>
                <OwlCarousel className='owl-theme' loop margin={10} items={1}>
                    <div class='item'>
                        <div className='item1'><img src={slider1}></img></div>
                        <Container>
                            <div className='d-flex justify-content-sm-center justify-content-lg-between'>
                                <div className="simg_text">
                                    <h1 className='text-sm-center text-lg-start'>Best <span>IT Solution</span> For Grow Your Business</h1>
                                    <p className='pt-3 text-sm-center text-lg-start'>We are passionate about bringing enterprise-level productivity,scalability,and security to small and medium Business</p>
                                    <div className='text-sm-center text-lg-start'>
                                        <button className='sbtn me-3 mt-3'>Contact Us</button>
                                        <button className='sbtn mt-3'>IT Solution</button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div class='item1'>
                        <img src={slider2}></img>
                        <Container>
                            <div className='d-flex justify-content-sm-center justify-content-lg-between'>
                                <div className="simg_text">
                                    <h1 className='text-sm-center text-lg-start'>We Provide Best Technology Solutions</h1>
                                    <p className='pt-3 text-sm-center text-lg-start'>We are passionate about bringing enterprise-level productivity,scalability,and security to small and medium Business</p>
                                    <div className='text-sm-center text-lg-start'>
                                        <button className='sbtn me-3 mt-3'>How it works</button>
                                        <button className='sbtn mt-3'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div class='item1'>
                        <img src={slider3}></img>
                        <Container>
                            <div className='d-flex justify-content-sm-center justify-content-lg-between'>
                                <div className="simg_text">
                                    <h1 className='text-sm-center text-lg-start'>Technology's future depends on innovators</h1>
                                    <p className='pt-3 text-sm-center text-lg-start'>We are passionate about bringing enterprise-level productivity , scalability , and security to small and medium Business</p>
                                    <div className='text-sm-center text-lg-start'>
                                        <button className='sbtn me-3 mt-3'>About Us</button>
                                        <button className='sbtn mt-3'>Our Services</button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </OwlCarousel>
            </section>

        </>
    )
}
export default Slider;