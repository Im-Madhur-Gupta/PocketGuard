import React from 'react';
import './Signup.css';

function Signup() {
    return (
        <div className="signup">
            <form>
                <label>First Name</label>
                <input type="text" name='firstname'></input>
                <label>Last Name</label>
                <input type="text" name='lastname'></input>
                <label>Email</label>
                <input type="email" name='email'></input>
                <label>Password</label>
                <input type="password" name='password'></input>\
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signup;