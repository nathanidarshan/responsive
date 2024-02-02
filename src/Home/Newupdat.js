import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import blogs1 from '../image/b-1.jpg';
import blogs2 from '../image/b-2.jpg';
import blogs3 from '../image/b-3.jpg';

function Newupdate() {
    return (
        <>
            <section>
                <div className='newsupda_head'>
                    <Container>
                        <div className="newupdat_info">
                            <h6>OUR CLIENT SAY</h6>
                            <h2>Testimonials</h2>
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <div className='blog'>
                                        <div>
                                            <img src={blogs1} width={"100%"}></img>
                                        </div>
                                        <div className='p-3'>
                                            <p>20 January - 2021 | <span>Technology</span></p>
                                            <h5>What Could 5g Change About The Way We Use Technology?</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                                            <span>+ Read More</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='blog'>
                                        <div>
                                            <img src={blogs2} width={"100%"}></img>
                                        </div>
                                        <div className='p-3'>
                                            <p>20 January - 2021 | <span>Technology</span></p>
                                            <h5>What Could 5g Change About The Way We Use Technology?</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                                            <span>+ Read More</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='blog'>
                                        <div>
                                            <img src={blogs3} width={"100%"}></img>
                                        </div>
                                        <div className='p-3'>
                                            <p>20 January - 2021 | <span>Technology</span></p>
                                            <h5>What Could 5g Change About The Way We Use Technology?</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                                            <span>+ Read More</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="newsupda_btn">
                                <button className='me-2'>Get Free Quote</button>
                                <button className='ms-2'>View All Blog</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default Newupdate;