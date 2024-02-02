import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import footerlogo from '../image/footer_logo.png';

function Footer() {
    return (
        <>
            <footer className="footerinfo p-5">
                <Container>
                    <Row >
                        <Col lg={4} md={6} className="p-3">
                            <div>
                                <a href=""><img className="pb-4" src={footerlogo}></img></a>
                                <p className="pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur</p>
                                <div className="first_footer">
                                    <a><FaFacebookF></FaFacebookF></a>
                                    <a><FaTwitter></FaTwitter></a>
                                    <a><FaLinkedinIn></FaLinkedinIn></a>
                                    <a><FaYoutube></FaYoutube></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={6} className="p-3">
                            <h5>Company</h5>
                            <div className="second_footer">
                                <div className="mt-4 mb-2"><a href="">About Us</a></div>
                                <div className="mt-2 mb-2"><a href="">Latest Project</a></div>
                                <div className="mt-2 mb-2"><a href="">IT Solutions</a></div>
                                <div className="mt-2 mb-2"><a href="">Digital Solutions</a></div>
                                <div className="mt-2 mb-2"><a href="">Team Member</a></div>
                                <div className="mt-2"><a href="">Contact Us</a></div>
                            </div>
                        </Col>
                        <Col lg={2} md={6} className="p-3">
                            <h5>Company</h5>
                            <div className="second_footer">
                                <div className="mt-4 mb-2"><a href="">IT Strategy</a></div>
                                <div className="mt-2 mb-2"><a href="">Network Services</a></div>
                                <div className="mt-2 mb-2"><a href="">Software Audits</a></div>
                                <div className="mt-2 mb-2"><a href="">Business Intelligence</a></div>
                                <div className="mt-2 mb-2"><a href="">Data Science</a></div>
                                <div className="mt-2"><a href="">Virtual Workstation</a></div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="p-3">
                            <h5>Contact Info</h5>
                            <div className="second_footer">
                                <div className="mt-4 mb-2"><a href="">Address: 526 Melrose Street, Water Mill, New York.</a></div>
                                <div className="mt-2 mb-2"><a href="">Phone: +080 707 555-321</a></div>
                                <div className="mt-2 mb-2"><a href="">Email: contact-info@example.com</a></div>
                                <div className="flax">
                                    <input type="text" className="email" placeholder="Enter your email"></input>
                                    <button className="footerbtn">Subscribe Now</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="lastinfo">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="d-flex justify-content-center justify-content-md-start">© 2021 - All Rights Reserved - Designed by Cute Themes.</div>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center justify-content-md-end">
                            <div>Terms & Conditions | Privacy Policy</div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Footer;