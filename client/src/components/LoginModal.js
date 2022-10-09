import React, { useState } from 'react';
import './LoginModal.css'

function Login({ onClose, isLoginModalOpen }) {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ username: '', password: '' });
    // const { username, password } = formState;

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


        console.log(isLoginModalOpen)
    }

    return (
        <div id="login" class="login">
            <div class="login-box">
                <h3>Login!</h3>
                <form class="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" defaultValue={formState.username} onBlur={handleChange} name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" defaultValue={formState.password} onBlur={handleChange} name="password" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit' onClick={onClose}>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Login;