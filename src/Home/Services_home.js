import '../App.css';
import { Col, Container, Row } from "react-bootstrap";
import { CiSettings } from "react-icons/ci";


function Services_home() {
    return (
        <>
            <section>
                <div className="ser_section">
                    <Container>
                        <div className="services_info">
                            <h6>WHAT WE DO</h6>
                            <h2>Our Services</h2>
                        </div>
                        <div className="ser_contain">
                            <Row>
                                <Col lg={4} md={6}>
                                    <div className="s_first">
                                        <span><CiSettings></CiSettings></span>
                                        <h5>Business Consulting</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                                        <h6>Read More</h6>
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="s_first">
                                        <span><CiSettings></CiSettings></span>
                                        <h5>Business Consulting</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                                        <h6>Read More</h6>
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="s_first">
                                        <span><CiSettings></CiSettings></span>
                                        <h5>Business Consulting</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                                        <h6>Read More</h6>
                                    </div>
                                </Col>
                            </Row>
                            <div className="ser_btn">
                                <button>View All Services</button>
                            </div>
                            <div className='spas'></div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Services_home;