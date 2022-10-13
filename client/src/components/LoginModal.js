import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import './LoginModal.css';

function Login(onClose) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { email, password } = formState;

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
    <div id="login" className="login">
      <div className="login-box">
        <h3>Login!</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
