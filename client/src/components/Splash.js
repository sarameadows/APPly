import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MainLogo from '../assets/images/APPly.png';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import './Splash.css';

const Splash = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
  };

  return (
    <div>
      {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}
      {isSignupModalOpen && <SignupModal onClose={toggleSignupModal} />}
      <Container fluid id="splash-container">
        <img id="splash-logo" src={MainLogo} alt="APPly logo" />
        <ButtonGroup id="splash-btn-group" aria-label="login and signup">
          <Button id="login-btn" onClick={() => toggleLoginModal()}>
            Login
          </Button>
          <Button id="signup-btn" onClick={() => toggleSignupModal()}>
            Signup
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Splash;
