import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 animate-pulse">
        <div className="w-64 h-40 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

            <div className="flex flex-col justify-center flex-1 ml-4 space-y-3">
                <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-1/4 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
