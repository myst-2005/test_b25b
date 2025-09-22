
import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="absolute inset-0 bg-brand-dark/70 flex flex-col items-center justify-center z-10 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-t-brand-primary border-brand-gray rounded-full animate-spin"></div>
            <p className="text-white mt-4 text-lg font-semibold">Pixarizing your photo...</p>
        </div>
    );
};
