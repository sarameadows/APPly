import React from 'react';
import './LoginModal.css'

function SignUp() {
    return (
        <div id="signup" class="signup">
            <div class="signup-box">
                <h3>Sign up!</h3>
                <form class="signup-form">
                    <label for="username">Username:</label>
                    <input type="text"></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="text"></input>
                    <br></br>
                    <label for="email">Email:</label>
                    <input type="text"></input>
                    <br></br>
                    <label for="github">GitHub:</label>
                    <input type="text"></input>
                </form>
            </div>
        </div>
    )
}


export default SignUp;