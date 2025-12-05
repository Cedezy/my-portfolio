import React from "react";

const SkeletonProfile = () => {
    return (
        <div className="shadow-sm p-4 md:p-6  border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 animate-pulse">
            
            {/* Profile image */}
            <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 mb-4"></div>
                <div className="w-40 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded mb-1"></div>
                <div className="w-20 h-3 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>

                {/* Buttons */}
                <div className="flex gap-2 w-full mt-2">
                    <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
            </div>

            {/* Education */}
            <div className="border-t pt-6 border-gray-300 dark:border-gray-700 mt-6 space-y-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="w-1/2 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="w-1/3 h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    </div>
                ))}
            </div>

            {/* Tools & Technologies */}
            <div className="border-t pt-6 border-gray-300 dark:border-gray-700 mt-6 flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-16 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonProfile;
