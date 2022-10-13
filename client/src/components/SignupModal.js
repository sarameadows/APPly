import { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Navigate } from 'react-router-dom';
import './LoginModal.css';
import {
  Modal,
  Form,
  Button,
} from 'react-bootstrap';

function SignUp(isSignupModalOpen, onClose) {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    email: '',
  });
  const { username, password, email } = formState;
  const [show, setShow] = useState(isSignupModalOpen);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addUser, { error }] = useMutation(ADD_USER);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = data.addUser.token;
      Auth.login(token);
      <Navigate to="/dashboard" replace={true} />;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal id="signup" className="signup" show={handleShow} onHide={handleClose} centered>
      {/* <div className="signup-box"> */}
        <Modal.Header closeButton><h1>Sign up!</h1></Modal.Header>
        <Modal.Body>
          <Form className="signup-form" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username:</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="username"
                value={username}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password:</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email address:</Form.Label>
              <Form.Control
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </Form.Group>
            <Button variant='btn-lg btn-dark' className='mt-3' type="submit">Submit</Button>
          </Form>
        </Modal.Body>
    </Modal>
  );
}

export default SignUp;
