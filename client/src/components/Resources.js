import NavBar from './Navbar';
import { Col, Row, Card, ListGroup } from 'react-bootstrap';

const Resources = () => {  
    return (
        <>
        <NavBar />
        <Row id="dashboard-container" className=''>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Find Jobs</Card.Title>
                        <Card.Text>
                        Look for jobs on the following sites!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><a href='https://www.linkedin.com/jobs/'>LinkedIn</a></ListGroup.Item>
                        <ListGroup.Item><a href='https://indeed.com/'>Indeed</a></ListGroup.Item>
                        <ListGroup.Item><a href='https://www.dice.com/'>Dice</a></ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Ace The Interview</Card.Title>
                        <Card.Text>
                        Look for jobs on the following sites!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><a href='https://www.linkedin.com/jobs/'>LinkedIn</a></ListGroup.Item>
                        <ListGroup.Item><a href='https://indeed.com/'>Indeed</a></ListGroup.Item>
                        <ListGroup.Item><a href='https://www.dice.com/'>Dice</a></ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Find Jobs</Card.Title>
                        <Card.Text>
                        Look for jobs on the following sites!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><a href='https://www.linkedin.com/jobs/'>LinkedIn</a></ListGroup.Item>
                        <ListGroup.Item><a href='https://indeed.com/'>Indeed</a></ListGroup.Item>
                        <ListGroup.Item><a href='https://www.dice.com/'>Dice</a></ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    );
};
  
  export default Resources;