import React from 'react';
import './LoginModal.css'

function Login() {
    return (
        <div id="login" class="login">
            <div class="login-box">
                <h3>Login!</h3>
                <form class="login-form">
                    <label for="username">Username:</label>
                    <input type="text"></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="text"></input>
                </form>
            </div>
        </div>
    )
}


export default Login;