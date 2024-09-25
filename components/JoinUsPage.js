import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JoinUs.css';

const JoinUsPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignup = () => {
        
    };

    return (
        <div className='login-form'>
            <h2>Join Us Page</h2>
            <form onSubmit={handleSignup}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                <label>
                    <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} required />
                    I agree to the terms and conditions
                </label>
                <button type="submit">Create Account</button>
                <button ><Link to="/signup-with-google">Continue With Google</Link>
                </button>

            </form>
            <button>Already have an account? <Link to="/login">Sign In</Link></button>
        </div>
    );
};

export default JoinUsPage;
