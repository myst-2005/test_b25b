
import React from 'react';
import { Loader } from './Loader';

interface ImageDisplayProps {
    originalImage: string | null;
    pixarizedImage: string | null;
    isLoading: boolean;
}

const PhotoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);


const ImageCard: React.FC<{ title: string; imageSrc: string | null; children?: React.ReactNode }> = ({ title, imageSrc, children }) => {
    return (
        <div className="w-full">
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-300">{title}</h3>
            <div className="aspect-square w-full bg-brand-gray/20 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg relative">
                {imageSrc ? (
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                ) : (
                    children || (
                        <div className="text-gray-500 text-center">
                            <PhotoIcon className="w-20 h-20 mx-auto" />
                            <p>Image will appear here</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImage, pixarizedImage, isLoading }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageCard title="Original" imageSrc={originalImage} />
            <ImageCard title="Pixarized" imageSrc={pixarizedImage}>
                {isLoading && <Loader />}
                {!isLoading && !pixarizedImage && (
                    <div className="text-gray-500 text-center p-4">
                        <PhotoIcon className="w-20 h-20 mx-auto" />
                        <p>Your Pixar-style image will be generated here.</p>
                    </div>
                )}
            </ImageCard>
        </div>
    );
};
