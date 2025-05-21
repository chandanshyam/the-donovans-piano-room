import React, { useState, useEffect } from 'react';

function LiveSessionsComponent() {
    const [isSessionJoined, setIsSessionJoined] = useState(false); // Reset on component mount
    const [isStreamActive, setIsStreamActive] = useState(false); // Initialize as false

    // Logic to determine if stream is active
    const isCurrentlyActive = () => {
        const now = new Date(); // Use current time (May 21, 2025, 06:48 PM EDT)
        //const now = new Date('2025-06-16T10:30:00');
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const hour = now.getHours();
        return (day === 1 || day === 4) && hour >= 9 && hour < 17; // Active Mon/Thu, 9 AM - 5 PM EDT
    };

    const handleJoinSession = () => {
        setIsSessionJoined(true);
        sessionStorage.setItem('sessionJoined', 'true');
    };

    // Update stream status on mount and clear session storage
    useEffect(() => {
        sessionStorage.removeItem('sessionJoined');
        setIsSessionJoined(false);
        setIsStreamActive(isCurrentlyActive());
    }, []);

    return (
        <div className="flex flex-col items-start p-2 bg-[#F5E6FF] h-screen">
            <h2 className="text-4xl font-medium text-[#8B4513] mb-2">
                Live Session
            </h2>

            {isSessionJoined && isStreamActive ? (
                <div className="bg-white rounded-xl shadow-lg p-2 border-b-4 border-[#8B4513] w-full max-w-6xl flex flex-col">
                    <iframe
                        src={process.env.REACT_APP_LIVE_STREAM_URL || "https://www.youtube.com/embed/-MAPZS1mP6U"}
                        title="Live Session"
                        className="w-full h-[450px] rounded-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md border-b-4 border-[#8B4513]">
                    {isStreamActive && (
                        <div className="flex justify-between items-center mb-6">
                            <span className="flex items-center text-lg text-pink-500 font-semibold">
                                <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                                Session in progress
                            </span>
                            <span className="text-lg text-gray-600 bg-[#FFF5E1] px-4 py-2 rounded-full">
                                Every Monday & Thursday
                            </span>
                        </div>
                    )}
                    {isStreamActive && <hr className="border-t-2 border-gray-300 mb-6" />}

                    <div className="relative">
                        <img
                            //src="https://via.placeholder.com/400x200?text=Donovan's+Piano+Room"
                            src="/journal-book/logo.svg"
                            alt="Session Preview"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-4 left-4 bg-white text-black text-lg font-semibold px-4 py-2 rounded-full">
                            Donovan's Piano Room
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mt-6 text-gray-800">
                        Lesson 2 - The Eight Note
                    </h3>
                    <p className="text-lg text-gray-500 mt-4">
                        Donec sed tortor ut justo consectetur venenatis. Curabitur sed enim in diam porta congue...
                    </p>
                    <button
                        onClick={handleJoinSession}
                        className="mt-8 w-full bg-purple-700 text-white text-xl font-semibold py-3 rounded-full hover:bg-purple-800 transition duration-300 ease-in-out"
                    >
                        Join Session
                    </button>
                </div>
            )}
        </div>
    );
}

export default LiveSessionsComponent;