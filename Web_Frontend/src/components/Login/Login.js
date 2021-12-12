import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <form>
                <label>E-Mail</label>
                <input type="email" name='email'></input>
                <label>Password</label>
                <input type="password" name='password'></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;