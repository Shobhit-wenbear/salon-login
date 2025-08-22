import React from 'react';

// --- Helper Components ---

// Icon component for input fields
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

// --- Main App Component ---
export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    // Dummy Users
    const dummyUsers = [
        { id: 1, email: 'admin123@gmail.com', password: 'admin123', role: 'admin', panelUrl: 'https://salon-ten-navy.vercel.app/dashboard' },
        { id: 2, email: 'staff123@gmail.com', password: 'staff123', role: 'staff', panelUrl: 'https://salon-staff.vercel.app/' },
        { id: 3, email: 'user123@gmail.com', password: 'user123', role: 'user', panelUrl: 'https://salon-user-delta.vercel.app/' },
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        setIsLoading(true);

        if (!email || !password) {
            setError('Please enter both username and password.');
            setIsLoading(false);
            return;
        }

        setTimeout(() => {
            const user = dummyUsers.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {
                setSuccessMessage(`Login successful! Welcome, ${user.role}.`);

                // Redirect to external URL
                
                window.location.href = user.panelUrl;
            } else {
                setError('Invalid username or password. Please try again.');
            }

            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                {/* Left Side - Login Form */}
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Salon Login</span>
                    <span className="font-light text-gray-500 mb-8">
                        Welcome back! Please enter your details.
                    </span>

                    <form onSubmit={handleLogin}>
                        {/* Username Input */}
                        <div className="relative flex items-center mb-4">
                            <span className="absolute left-4">
                                <UserIcon />
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email (admin, staff, user)"
                                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative flex items-center mb-6">
                            <span className="absolute left-4">
                                <LockIcon />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password (password123)"
                                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Error and Success Messages */}
                        {error && (
                            <div className="mb-4 p-3 text-center bg-red-100 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}
                        {successMessage && (
                            <div className="mb-4 p-3 text-center bg-green-100 text-green-700 rounded-lg">
                                {successMessage}
                            </div>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-transform transform hover:scale-105 duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing In...
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>
                </div>

                {/* Right Side - Image */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="A person getting a haircut in a modern salon"
                        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x570/000000/FFFFFF?text=Salon'; }}
                    />
                </div>
            </div>
        </div>
    );
}
