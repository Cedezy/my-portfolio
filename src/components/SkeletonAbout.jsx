import React from "react";
import { Info } from "lucide-react";

const SkeletonAbout = () => {
    return (
        <div className="p-4 md:p-6 shadow-sm md:rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 animate-pulse">
            <div className="flex gap-2 items-center mb-4">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="space-y-2">
                <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="mt-4 flex gap-3">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonAbout;
