import React from "react";
import { X, Clock } from "lucide-react";

const ComingSoonModal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-lg relative fade-in shadow-2xl border border-gray-200 dark:border-gray-700">

                <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mb-6 shadow-lg">
                        <Clock size={32} className="text-white" />
                    </div>

                    <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-50 tracking-tight">
                        Resume Feature
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
                        Hi! I’m still preparing my resume. I’ll have it available soon, so check back later if you want to see it. Thanks for your patience, I love you!
                    </p>



                    <button
                        onClick={onClose}
                        className="w-full bg-gray-700 hover:bg-gray-800 cursor-pointer text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonModal;