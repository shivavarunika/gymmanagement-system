// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [showRegister, setShowRegister] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [repeatPassword, setRepeatPassword] = useState('');
//     const [phone, setPhone] = useState('');
//     const navigate = useNavigate();

//     const toggleForm = () => {
//         setShowRegister(prev => !prev);
//         // Reset fields on toggle
//         setUsername('');
//         setPassword('');
//         setRepeatPassword('');
//         setPhone('');
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();

//         const trainers = JSON.parse(localStorage.getItem('trainers')) || [];
//         const members = JSON.parse(localStorage.getItem('members')) || [];

//         // Check if user is trainer
//         const isTrainer = trainers.some(trainer => trainer.name === username);
//         if (isTrainer) {
//             localStorage.setItem('role', 'trainer');
//             localStorage.setItem('username', username);
//             navigate('/trainer/dashboard');
//             return;
//         }

//         // Check if admin
//         if (username === 'varun' && password === '1234567') {
//             localStorage.setItem('role', 'admin');
//             navigate('/admin/dashboard');
//             return;
//         }

//         // Check member
//         const member = members.find(m => m.username === username && m.password === password);
//         if (member) {
//             localStorage.setItem('role', 'customer');
//             localStorage.setItem('username', username);
//             navigate('/member/dashboard');
//         } else {
//             alert('Invalid login credentials!');
//         }
//     };

//     const handleRegister = (e) => {
//         e.preventDefault();

//         if (password !== repeatPassword) {
//             alert("Passwords do not match!");
//             return;
//         }

//         const members = JSON.parse(localStorage.getItem('members')) || [];

//         if (members.find(m => m.username === username)) {
//             alert('Username already exists. Try logging in.');
//             return;
//         }

//         const newMember = {
//             username,
//             password,
//             phone
//         };

//         members.push(newMember);
//         localStorage.setItem('members', JSON.stringify(members));
//         alert('Registered successfully! Redirecting to login...');
//         setShowRegister(false);
//         setUsername('');
//         setPassword('');
//         setRepeatPassword('');
//         setPhone('');
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//             <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//                 {!showRegister ? (
//                     <form onSubmit={handleLogin}>
//                         <h2 className="text-2xl font-bold mb-4">Login</h2>
//                         <input
//                             className="form-input w-full mb-3 p-2 border rounded"
//                             type="text"
//                             placeholder="Enter username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                         <input
//                             className="form-input w-full mb-3 p-2 border rounded"
//                             type="password"
//                             placeholder="Enter password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <button
//                             type="submit"
//                             className="bg-blue-500 w-full text-white p-2 rounded hover:bg-blue-600"
//                         >
//                             Login
//                         </button>
//                         <p className="mt-4 text-sm text-center">
//                             Don't have an account?{' '}
//                             <button
//                                 type="button"
//                                 onClick={toggleForm}
//                                 className="text-blue-500 underline"
//                             >
//                                 Register
//                             </button>
//                         </p>
//                     </form>
//                 ) : (
//                     <form onSubmit={handleRegister}>
//                         <h2 className="text-2xl font-bold mb-4">Register</h2>
//                         <input
//                             className="form-input w-full mb-3 p-2 border rounded"
//                             type="text"
//                             placeholder="Enter username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                         <input
//                             className="form-input w-full mb-3 p-2 border rounded"
//                             type="password"
//                             placeholder="Enter password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <input
//                             className="form-input w-full mb-3 p-2 border rounded"
//                             type="password"
//                             placeholder="Repeat password"
//                             value={repeatPassword}
//                             onChange={(e) => setRepeatPassword(e.target.value)}
//                             required
//                         />
//                         <input
//                             className="form-input w-full mb-3 p-2 border rounded"
//                             type="text"
//                             placeholder="Phone number"
//                             value={phone}
//                             onChange={(e) => setPhone(e.target.value)}
//                             required
//                         />
//                         <button
//                             type="submit" 
//                             className="bg-green-600 w-full text-white p-2 rounded hover:bg-green-700"
//                         >
//                             Register
//                         </button>
//                         <p className="mt-4 text-sm text-center">
//                             Already have an account?{' '}
//                             <button
//                                 type="button" 
//                                 onClick={toggleForm} 
//                                 className="text-blue-500 underline"
//                             >
//                                 Login
//                             </button>
//                         </p>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// }

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

        // Trainer check (name match only)
        if (trainers.includes(username)) {
            navigate('/trainer/dashboard');
            return;
        }

        // Admin check
        if (username === 'varun' && password === '1234567') {
            navigate('/admin/dashboard');
            return;
        }

        // Member check (username + password)
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
        // In dummy setup, registration doesn't save user anywhere.
        alert("Registered successfully! (dummy - no storage)\nNow redirecting to login.");
        toggleForm();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
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
                            className="bg-blue-500 w-full text-white p-2 rounded hover:bg-blue-600"
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
                            className="bg-green-600 w-full text-white p-2 rounded hover:bg-green-700"
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
