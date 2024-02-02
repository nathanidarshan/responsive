import { Container } from 'react-bootstrap';
import '../App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaStar } from "react-icons/fa";
import test from '../image/test-4.jpg'


function Testimonials() {
    return (
        <>
            <section>
                <div className='testi_he'>
                    <Container>
                        <div className="testimon_info">
                            <h6>OUR CLIENT SAY</h6>
                            <h2>Testimonials</h2>
                        </div>
                        <OwlCarousel className='owl-theme' loop margin={10} items={3} >
                            <div class='item'>
                                <div className='box'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <span ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                                    <h6>Google</h6>
                                </div>
                                <div className='d-flex'>
                                    <div className='box_img d-flex'>
                                        <img src={test}></img>
                                    </div>
                                    <div className='img_name'>
                                        <h6>Monica Frazier</h6>
                                        <p>Solutions Coordinator</p>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='box'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <span ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                                    <h6>Google</h6>
                                </div>
                                <div className='d-flex'>
                                    <div className='box_img d-flex'>
                                        <img src={test}></img>
                                    </div>
                                    <div className='img_name'>
                                        <h6>Monica Frazier</h6>
                                        <p>Solutions Coordinator</p>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='box'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <span ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                                    <h6>Google</h6>
                                </div>
                                <div className='d-flex'>
                                    <div className='box_img d-flex'>
                                        <img src={test}></img>
                                    </div>
                                    <div className='img_name'>
                                        <h6>Monica Frazier</h6>
                                        <p>Solutions Coordinator</p>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='box'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <span ><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                                    <h6>Google</h6>
                                </div>
                                <div className='d-flex'>
                                    <div className='box_img d-flex'>
                                        <img src={test}></img>
                                    </div>
                                    <div className='img_name'>
                                        <h6>Monica Frazier</h6>
                                        <p>Solutions Coordinator</p>
                                    </div>
                                </div>
                            </div>
                            
                        </OwlCarousel>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default Testimonials;