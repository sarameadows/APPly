import { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import './LoginModal.css';

function SignUp(onClose) {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    email: '',
    github: '',
  });
  const { username, password, email, github } = formState;

  const [addUser] = useMutation(ADD_USER);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    <Link to="/dashboard"></Link>;
  };

  return (
    <div id="signup" className="signup" onBlur={onClose}>
      <div className="signup-box">
        <h3>Sign up!</h3>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              defaultValue={username}
              onChange={handleChange}
              name="username"
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              defaultValue={password}
              onChange={handleChange}
              name="password"
              value={password}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              defaultValue={email}
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="github">GitHub:</label>
            <input
              type="text"
              defaultValue={github}
              onChange={handleChange}
              name="github"
              value={github}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
