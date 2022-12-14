import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
// import './LoginModal.css';
import {
  Modal,
  Form,
  Button,
} from 'react-bootstrap';

function Login(isLoginModalOpen, onClose) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { email, password } = formState;
  const [show, setShow] = useState(isLoginModalOpen);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [login, { error }] = useMutation(LOGIN);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await login({
        variables: { email, password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      <Navigate to="/dashboard" replace={true} />;
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <Modal id="login" className="login" show={show} onHide={handleClose} centered>
          <Modal.Header className='bg-white' closeButton><h1 className='bg-white'>Login!</h1></Modal.Header>
          <Modal.Body className='bg-white'>
            <Form className="login-form bg-white" onSubmit={handleSubmit}>
              <Form.Group className='bg-white'>
                <Form.Label htmlFor="username" className='bg-white'>Email:</Form.Label>
                <Form.Control
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={email}
                />
              </Form.Group>
              <Form.Group className='bg-white'>
                <Form.Label htmlFor="password" className='bg-white'>Password:</Form.Label>
                <Form.Control
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={password}
                />
              </Form.Group>
              <Button type="submit" variant='btn-lg btn-dark' className='mt-3'>Submit</Button>
            </Form>
          </Modal.Body>
      </Modal>
  );
}

export default Login;
