import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MainLogo from '../assets/images/APPly.png';
import './Splash.css';
import Login from './LoginModal';
import SignUp from './SignupModal';

const Splash = () => {
  const [isLoginModalOpen, setLoginModalOpen]  = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  //const toggleModal = () => {
  //   setLoginModalOpen(!isLoginModalOpen);
  // }

  return (
    <Container fluid id="splash-container">

      {isLoginModalOpen && (
      <Login onclose={!isLoginModalOpen} />
      )} 

      {isSignupModalOpen && <SignUp />}
      <img id="splash-logo" src={MainLogo} alt="APPly logo" />
      <ButtonGroup id="splash-btn-group" aria-label="login and signup">
        <Button
          id="login-btn"
          onClick={() => setLoginModalOpen(!isLoginModalOpen)}
        >
          Login
        </Button>
        <Button
          id="signup-btn"
          onClick={() => setSignupModalOpen(!isSignupModalOpen)}
        >
          Signup
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Splash;
