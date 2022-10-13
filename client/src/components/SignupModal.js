import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Navigate } from 'react-router-dom';
// import './LoginModal.css';
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
    <Modal id="signup" className="signup" show={show} onHide={handleClose} centered>
        <Modal.Header className='bg-white' closeButton><h1 className='bg-white'>Sign up!</h1></Modal.Header>
        <Modal.Body className='bg-white'>
          <Form className="signup-form bg-white" onSubmit={handleSubmit}>
            <Form.Group className='bg-white'>
              <Form.Label htmlFor="username" className='bg-white'>Username:</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="username"
                value={username}
              />
            </Form.Group>
            <Form.Group className='bg-white'>
              <Form.Label htmlFor="password" className='bg-white mt-2'>Password:</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </Form.Group>
            <Form.Group className='bg-white'>
              <Form.Label htmlFor="email" className='bg-white'>Email address:</Form.Label>
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
