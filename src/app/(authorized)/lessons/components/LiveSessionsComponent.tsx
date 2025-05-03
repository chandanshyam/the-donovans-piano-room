import React, { useState } from 'react'

function LiveSessionsComponent() {

    const [isSessionJoined, setIsSessionJoined] = useState(false);

    const handleJoinSession = () => {
        setIsSessionJoined(true);
    };
    
    return (
        <div className="p-4">
        <h2 className="text-4xl font-medium text-primary-brown mb-4">
            Live Session
        </h2>
    
        {isSessionJoined ? (
            <div className="bg-white rounded-lg shadow-md p-4">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder URL
                    title="Live Session"
                    className="w-full h-[400px] rounded-lg"
                    allowFullScreen>
                </iframe>
            </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md p-4 max-w-md">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Session in progress</span>
                        <span className="text-sm text-gray-500">Every Monday & Thursday</span>
                    </div>

                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/400x200?text=Donovan's+Piano+Room"
                            alt="Session Preview"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
                            Donovan's Piano Room
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mt-2">Lesson 2 - The Eight Note</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Lorem ipsum tortor ut justo consectetur venenatis. Curabitur sed enim in porta congue...
                    </p>
                    <button
                        onClick={handleJoinSession}
                        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                        >
                        Join Session
                    </button>
                </div>
            )}
            </div>
        );
    }
export default LiveSessionsComponent