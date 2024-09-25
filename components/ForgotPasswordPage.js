import React, { useState } from 'react';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        // Handle forgot password logic here
    };

    return (
        <div className='login-form'>
            <h2>Forgot Password Page</h2>
            <form onSubmit={handleForgotPassword}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                <button type="submit">Send Code</button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;
