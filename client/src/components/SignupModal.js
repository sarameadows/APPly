import React from 'react';
import './LoginModal.css'

function SignUp() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { username, password, email, github } = formState;
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState);
    }
    return (
        <div id="signup" class="signup">
            <div class="signup-box">
                <h3>Sign up!</h3>
                <form class="signup-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" defaultValue={formState.username} onChange={handleChange} name='username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" defaultValue={formState.password} onChange={handleChange} name='password' />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={formState.email} onChange={handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="github">GitHub:</label>
                        <input type="text" defaultValue={formState.github} onChange={handleChange} name='github' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default SignUp;