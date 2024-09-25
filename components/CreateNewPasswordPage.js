import React, { useState } from 'react';

const CreateNewPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        // Handle reset password logic here
    };

    return (
        <div>
            <h2>Create New Password Page</h2>
            <form onSubmit={handleResetPassword}>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" required />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required />
                <button type="submit">Restore my password</button>
            </form>
        </div>
    );
};

export default CreateNewPasswordPage;
