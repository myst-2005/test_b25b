
import React from 'react';

interface CTAButtonProps {
    onClick: () => void;
    disabled: boolean;
    isLoading: boolean;
}

const WandIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 1 .879 16.5a3 3 0 0 1 4.242-4.243 3 3 0 0 0 4.242 0 3 3 0 0 0 0-4.242 3 3 0 0 1-4.242-4.243m5.78 1.128a3 3 0 0 0-1.128-5.78m1.128 5.78 2.529 2.529m-2.529-2.529-2.529-2.529m2.529 2.529.088-.088a2.25 2.25 0 0 1 3.182 0l2.121 2.121a2.25 2.25 0 0 1 0 3.182l-.088.088m-5.78-1.128a3 3 0 0 0 5.78 1.128m-5.78-1.128.088.088a2.25 2.25 0 0 1 0 3.182l-2.121 2.121a2.25 2.25 0 0 1-3.182 0l-.088-.088m1.128-5.78a3 3 0 0 1 5.78 0m-1.128-5.78 2.529-2.529m-2.529 2.529-2.529 2.529" />
    </svg>
);


const LoadingSpinner: React.FC<{className?: string}> = ({className}) => (
    <div className={`animate-spin rounded-full border-t-2 border-b-2 border-white ${className}`} />
);

export const CTAButton: React.FC<CTAButtonProps> = ({ onClick, disabled, isLoading }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="w-full flex items-center justify-center text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-brand-primary/50 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-500 disabled:to-gray-600"
        >
            {isLoading ? (
                <>
                    <LoadingSpinner className="w-5 h-5 mr-3" />
                    <span>Generating...</span>
                </>
            ) : (
                <>
                    <WandIcon className="w-6 h-6 mr-2"/>
                    <span>Pixarize Image</span>
                </>
            )}
        </button>
    );
};
