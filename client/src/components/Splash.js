import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MainLogo from '../assets/images/APPly.png';
import './Splash.css';

const Splash = () => {
  return (
    <Container fluid id="splash-container">
      <img id="splash-logo" src={MainLogo} alt="APPly logo" />
      <ButtonGroup id="splash-btn-group" aria-label="login and signup">
        <Button id="login-btn">Login</Button>
        <Button id="signup-btn">Signup</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Splash;
