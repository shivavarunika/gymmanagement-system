import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const trainers = ['John Doe', 'Jane Smith'];
    const members = [
        { username: 'alice', password: 'pass123' },
        { username: 'bob', password: 'pass456' }
    ];

    const toggleForm = () => {
        setShowRegister(prev => !prev);
        setUsername('');
        setPassword('');
        setRepeatPassword('');
        setPhone('');
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (trainers.includes(username)) {
            navigate('/trainer/dashboard');
            return;
        }

        if (username === 'varun' && password === '1234567') {
            navigate('/admin/dashboard');
            return;
        }

        const memberMatch = members.find(m => m.username === username && m.password === password);
        if (memberMatch) {
            navigate('/member/dashboard');
        } else {
            alert('Invalid login credentials!');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Registered successfully! (dummy - no storage)\nNow redirecting to login.");
        toggleForm();
    };

    return (
        <div
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-8 w-full max-w-md">
                {!showRegister ? (
                    <form onSubmit={handleLogin}>
                        <h2 className="text-2xl font-bold mb-4">Login</h2>
                        <input
                            className="form-input w-full mb-3 p-2 border rounded"
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            className="form-input w-full mb-3 p-2 border rounded"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-zinc-500 w-full text-white p-2 rounded hover:bg-zinc-600"
                        >
                            Login
                        </button>
                        <p className="mt-4 text-sm text-center">
                            Don't have an account?{' '}
                            <button
                                type="button"
                                onClick={toggleForm}
                                className="text-blue-500 underline"
                            >
                                Register
                            </button>
                        </p>
                    </form>
                ) : (
                    <form onSubmit={handleRegister}>
                        <h2 className="text-2xl font-bold mb-4">Register</h2>
                        <input
                            className="form-input w-full mb-3 p-2 border rounded"
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            className="form-input w-full mb-3 p-2 border rounded"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            className="form-input w-full mb-3 p-2 border rounded"
                            type="password"
                            placeholder="Repeat password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                        <input
                            className="form-input w-full mb-3 p-2 border rounded"
                            type="text"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-zinc-600 w-full text-white p-2 rounded hover:bg-zinc-700"
                        >
                            Register
                        </button>
                        <p className="mt-4 text-sm text-center">
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={toggleForm}
                                className="text-blue-500 underline"
                            >
                                Login
                            </button>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
