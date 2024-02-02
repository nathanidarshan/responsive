import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import team1 from '../image/team-1.jpg'
import team2 from '../image/team-2.jpg'
import team3 from '../image/team-3.jpg'
import team4 from '../image/team-4.jpg'

function Team() {
    return (
        <>
            <section>
                <div>
                    <Container>
                        <div className='team_info'>
                            <h6>OUR LEADERSHIP</h6>
                            <h2>Team Members</h2>
                        </div>
                        <div>
                            <Row className='p-3 pb-5'>
                                <Col md={6} lg={3}>
                                    <img src={team1} width={"100%"} height={"auto"}></img>
                                    <div className='team_text'>
                                        <h5>Howard Berry</h5>
                                        <p>Executive Officer</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={3}>
                                    <img src={team2} width={"100%"} height={"auto"}></img>
                                    <div className='team_text'>
                                        <h5>Morris Nelson</h5>
                                        <p>Staffing Director</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={3}>
                                    <img src={team3} width={"100%"} height={"auto"}></img>
                                    <div className='team_text'>
                                        <h5>Travis Wallace</h5>
                                        <p>Content Executive</p>
                                    </div>
                                </Col>
                                <Col md={6} lg={3}>
                                    <img src={team4} width={"100%"} height={"auto"}></img>
                                    <div className='team_text'>
                                        <h5>Steve Frazier</h5>
                                        <p>Technical Executive</p>
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
export default Team;