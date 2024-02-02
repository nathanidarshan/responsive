import '../App.css';
import { Col, Container, Row } from "react-bootstrap";
import project1 from '../image/p-1.jpg';
import project2 from '../image/p-2.jpg';
import project3 from '../image/p-3.jpg';
import project4 from '../image/p-4.jpg';
import project5 from '../image/p-5.jpg';
import project6 from '../image/p-6.jpg';


function Project() {
    return (
        <>
            <section>
                <div className="project p-4">
                    <Container>
                        <div className="project_info">
                            <h6>FEATURED WORKS</h6>
                            <h2>Case Studies</h2>
                        </div>
                        <div>
                            <Row>
                                <Col md={6} lg={4} className='pb-4'>
                                    <img src={project1} width={"100%"} style={{ borderRadius: "5px" }}></img>
                                </Col>
                                <Col md={6} lg={4} className='pb-4'>
                                    <img src={project2} width={"100%"} style={{ borderRadius: "5px" }}></img>
                                </Col>
                                <Col md={6} lg={4} className='pb-4'>
                                    <img src={project3} width={"100%"} style={{ borderRadius: "5px" }}></img>
                                </Col>
                                <Col md={6} lg={4} className='pb-4'>
                                    <img src={project4} width={"100%"} style={{ borderRadius: "5px" }}></img>
                                </Col>
                                <Col md={6} lg={4} className='pb-4'>
                                    <img src={project5} width={"100%"} style={{ borderRadius: "5px" }}></img>
                                </Col>
                                <Col md={6} lg={4} className='pb-4'>
                                    <img src={project6} width={"100%"} style={{ borderRadius: "5px" }}></img>
                                </Col>
                            </Row>
                            <div className="project_btn">
                                <button>View All Projects</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default Project;