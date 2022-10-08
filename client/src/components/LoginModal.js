import React, { useState } from 'react';
import './LoginModal.css'

function Login() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, password } = formState;
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState);
    }

    return (
        <div id="login" class="login">
            <div class="login-box">
                <h3>Login!</h3>
                <form class="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label for="username">Username:</label>
                        <input type="text" defaultValue={formState.username} onChange={handleChange} name="username" />
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="text" defaultValue={formState.password} onChange={handleChange} name="password" />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Login;