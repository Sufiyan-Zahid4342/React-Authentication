import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <div className='login-form'>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <label>
                    <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                    Remember Me
                </label>
                
                <button >   <Link to="/forgot-password">Forgot Password</Link></button>
                <button>Don't have an account? <Link to="/join-us" >Create your account</Link></button>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default LoginPage;
