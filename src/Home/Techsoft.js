import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import icon1 from '../image/i-1.svg';
import icon2 from '../image/i-2.svg';
import icon3 from '../image/i-3.svg';
import icon4 from '../image/i-4.svg';
import icon5 from '../image/i-5.svg';
import icon6 from '../image/i-6.svg';


function Techsoft() {
    return (
        <>
            <section>
                <div className='pb-5'>
                    <Container>
                        <div className="techsoft_info">
                            <h6>TECHSOFT SO DIFFERENT?</h6>
                            <h2>Why Trust Us?</h2>
                        </div>
                        <div className='techsoft_text'>
                            <Row>
                                <Col md={6} lg={4} className='d-flex'>
                                    <div className='pe-5'>
                                        <img src={icon1} width={"65px"}></img>
                                    </div>
                                    <div>
                                        <h5>Protect your Business</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={4} className='d-flex'>
                                    <div className='pe-5'>
                                        <img src={icon2} width={"65px"}></img>
                                    </div>
                                    <div>
                                        <h5>Protect your Business</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={4} className='d-flex'>
                                    <div className='pe-5'>
                                        <img src={icon3} width={"65px"}></img>
                                    </div>
                                    <div>
                                        <h5>Protect your Business</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={4} className='d-flex pt-4'>
                                    <div className='pe-5'>
                                        <img src={icon4} width={"65px"}></img>
                                    </div>
                                    <div>
                                        <h5>Protect your Business</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={4} className='d-flex pt-4'>
                                    <div className='pe-5'>
                                        <img src={icon5} width={"65px"}></img>
                                    </div>
                                    <div>
                                        <h5>Protect your Business</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={4} className='d-flex pt-4'>
                                    <div className='pe-5'>
                                        <img src={icon6} width={"65px"}></img>
                                    </div>
                                    <div>
                                        <h5>Protect your Business</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default Techsoft;