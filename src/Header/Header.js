import '../App.css';
import { Button, Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSearch, } from "react-icons/fa";
import { FaLocationDot, FaAngleDown } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import logo from "../image/logo.png";

function Header() {
    return (
        <section>
            <div className='top_info d-none d-lg-block pt-2 pb-1' >
                <Container>
                    <Row className='top_header justify-content-between'>
                        <Col xs={'auto'}>
                            <div className='d-flex align-items-center'>
                                <p><FaLocationDot></FaLocationDot><a href=''>526 Melrose Street,New York.</a></p>
                                <p><MdEmail></MdEmail><a href=''>info@example.com</a></p>
                                <p><IoIosPhonePortrait></IoIosPhonePortrait><a href=''>+505 307 222-33</a></p>
                            </div>
                        </Col>
                        <Col xs={'auto'}>
                            <div className='top_icon d-flex justify-content-end'>
                                <a><FaFacebookF></FaFacebookF></a>
                                <a><FaTwitter></FaTwitter></a>
                                <a><FaLinkedinIn></FaLinkedinIn></a>
                                <a><FaInstagram></FaInstagram></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='main_header'>
                <Navbar expand="lg" className=" pt-3 pb-3">
                    <Container>
                        <Navbar.Brand href="#"><a href=''><img src={logo}></img></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="m-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}

                            >
                                <Nav.Link href="#action1" className='me-2'>Home<FaAngleDown className='m-1' style={{ fontSize: "13px" }}></FaAngleDown></Nav.Link>
                                <Nav.Link href="#action2" className='me-2'>About US</Nav.Link>
                                <Nav.Link href="#action2" className='me-2'>Services<FaAngleDown className='m-1' style={{ fontSize: "13px" }}></FaAngleDown></Nav.Link>
                                <Nav.Link href="#action2" className='me-2'>Project<FaAngleDown className='m-1' style={{ fontSize: "13px" }}></FaAngleDown></Nav.Link>
                                <Nav.Link href="#action2" className='me-2'>Pages<FaAngleDown className='m-1' style={{ fontSize: "13px" }}></FaAngleDown></Nav.Link>
                                <Nav.Link href="#action2" className='me-2'>Blog<FaAngleDown className='m-1' style={{ fontSize: "13px" }}></FaAngleDown></Nav.Link>
                                <Nav.Link href="#action2" className='me-2'>Contact<FaAngleDown className='m-1' style={{ fontSize: "13px" }}></FaAngleDown ></Nav.Link>

                            </Nav>
                            <div className="headerright d-lg-flex d-none ">
                                <a className='me-4' style={{ color: "grey" }}><FaSearch></FaSearch></a>
                                <Button className='d-none d-xl-block'>Get It Support</Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </section >
    );
}

export default Header;