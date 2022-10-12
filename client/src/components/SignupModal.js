import React, { useState } from 'react';
import './LoginModal.css'

function SignUp({ onClose }) {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ username: '', password: '', email: '', github: '' });
    // const { username, password, email, github } = formState;

    function handleChange(e) {
        if (!e.target.value.length) {
            setErrorMessage(`Please enter your ${e.target.name}.`);
        } else {
            setErrorMessage('');
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }


    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState);
    }
    return (
        <div id="signup" className="signup">
            <div className="signup-box">
                <h3>Sign up!</h3>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username:</label>
                        <input type="username" defaultValue={formState.username} onBlur={handleChange} name="username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={formState.email} onBlur={handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" defaultValue={formState.password} onBlur={handleChange} name='password' />
                    </div>
                    <div>
                        <label htmlFor="github">GitHub:</label>
                        <input type="text" defaultValue={formState.github} onBlur={handleChange} name='github' />
                    </div>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit' onClick={onClose}>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default SignUp;