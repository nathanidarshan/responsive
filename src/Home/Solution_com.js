import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../image/about.jpg';

function Solution_com(){
    return(
        <>
        <section>
            <div className='about'>
                <Container>
                    <Row>
                        <Col className='about_sec'>
                            <div className='about_text'>
                                <h5>IT SOLUTION COMPANY</h5>
                                <h2>We design, develop, implement and support <span>IT Systems</span></h2>
                                <p className='pt-3 pb-4' style={{color:"grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit velit.</p>
                                <p className='last_text' style={{color:"grey"}}>We are a highly trained and qualified team ready to provide viable IT solutions together with full-time support and expert advice to fulfill your business needs.</p>
                            </div>
                        </Col>
                        <Col className=''>
                            <div className='about_img'>
                                <img src={about} width={"100%"}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Solution_com;