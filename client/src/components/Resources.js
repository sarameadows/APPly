import NavBar from './Navbar';
import { Col, Row, Container, Card, ListGroup } from 'react-bootstrap';
import './Resources.css';

const Resources = () => {  
    return (
        <>
        <NavBar />
        <Container id="dashboard-container" className='d-flex justify-space-between'>
            <Col>
                <Card style={{ width: '25rem' }} className="text-center">
                    <Card.Body className='bg-dark text-light'>
                        <Card.Title><h1 className='bg-dark'>Find Jobs</h1></Card.Title>
                        <Card.Text className='bg-dark'>
                        Look for jobs on these sites!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' href='https://www.linkedin.com/jobs/'>LinkedIn</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://indeed.com/'>Indeed</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.dice.com/'>Dice</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.glassdoor.com/index.html'>Glassdoor</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '25rem' }} className="text-center">
                    <Card.Body className='bg-dark text-light'>
                        <Card.Title><h1 className='bg-dark'>Brush up on Coding</h1></Card.Title>
                        <Card.Text className='bg-dark'>
                        Review your skills using these sites!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.codecademy.com/'>Codeacademy</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.udemy.com/'>Udemy</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.codechef.com/'>Code Chef</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.hackerrank.com/'>HackerRank</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.codingame.com/start'>Codingame</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link text-decoration-none bg-white text-dark' target='_blank' href='https://www.khanacademy.org/computing/computer-science/algorithms'>Khan Academy Algorithms</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '25rem' }} className="text-center">
                    <Card.Body className='bg-dark text-light'>
                        <Card.Title><h1 className='bg-dark text-light'>Ace The Interview</h1></Card.Title>
                        <Card.Text className='bg-dark text-light'>
                        Nail your interview with practice!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <a className='link bg-white text-decoration-none text-dark' target='_blank' href='https://www.techinterviewhandbook.org/software-engineering-interview-guide/'>Tech Interview Handbook</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link bg-white text-decoration-none text-dark' target='_blank' href='https://techdevguide.withgoogle.com/paths/interview/'>Google Interview Prep</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link bg-white text-decoration-none text-dark' target='_blank' href='https://www.rocketblocks.me/'>Rocket Blocks</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link bg-white text-decoration-none text-dark' target='_blank' href='https://interviewing.io/'>Interviewing.io</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a className='link bg-white text-decoration-none text-dark' target='_blank' href='https://www.pramp.com/#/'>Pramp</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Container>
        </>
    );
};
  
  export default Resources;