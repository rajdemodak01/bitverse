import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Sessions: React.FC = () => {
    return <RegisterForm />;
};

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        gender: '',
        email: '',
        code: '',
        subject: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setRedirect(true), 3000);
    };

    if (redirect) {
        return (
            <div className="container flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-yellow-500">
                <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
                    <h1 className="text-2xl font-bold text-green-600">Registration Successful!</h1>
                    <p className="mt-4">Redirecting to your meeting link...</p>
                    <div className="mt-6 space-y-4">
                        <a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer" className="block bg-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Join with Google Meet</a>
                        <Link to="/" className="block bg-gray-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">Back to Home</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-yellow-500 p-6">
            <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white p-8 rounded-2xl shadow-2xl">
                <img src="https://www.neugroup.com/wp-content/uploads/2020/12/AdobeStock_339093171-scaled.jpeg" alt="Registration" className="w-full md:w-1/2 rounded-2xl shadow-lg mb-6 md:mb-0" />
                <div className="content w-full md:w-1/2 md:ml-6">
                    <h1 className="text-3xl font-bold text-center">Register Here</h1>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input type="text" name="name" placeholder="NAME" onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500" required />
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <input type="number" name="phoneNumber" placeholder="PHONE NUMBER" onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 p-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500" required />
                            <select name="gender" onChange={handleChange} className="w-full md:w-1/2 border border-gray-300 p-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500" required>
                                <option value="">GENDER</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="NON-BINARY">NON-BINARY</option>
                            </select>
                        </div>
                        <input type="email" name="email" placeholder="EMAIL ADDRESS" onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500" required />
                        <select id="subject" name="subject" onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Choose a subject</option>
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                        </select>
                        <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-2xl shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mt-6">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sessions;
