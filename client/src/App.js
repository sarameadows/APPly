import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {
  BrowserRouter as Router,
  Swtich,
  Routes,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Container fluid>
      {/* Insert logo as image in center of page */}
      <ButtonGroup aria-label="login and signup">
        <Button size="lg" variant="secondary">
          Login
        </Button>
        <Button size="lg" variant="secondary">
          Signup
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
