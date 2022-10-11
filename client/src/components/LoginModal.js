import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="login" className="login" onBlur={onClose}>
      <div className="login-box">
        <h3>Login!</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              defaultValue={email}
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              defaultValue={password}
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
