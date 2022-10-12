import React, { useState } from 'react';
import './LoginModal.css'

function Login({ onClose }) {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ username: '', password: '' });
    // const { email, password } = formState;

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
        <div id="login" className="login">
            <div className="login-box">
                <h3>Login!</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" defaultValue={formState.email} onBlur={handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" defaultValue={formState.password} onBlur={handleChange} name="password" />
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


export default Login;