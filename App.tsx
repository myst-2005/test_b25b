
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ImageDisplay } from './components/ImageDisplay';
import { generatePixarStyleImage } from './services/geminiService';
import { CTAButton } from './components/CTAButton';
import { imageDataToParts } from './utils/imageUtils';
import type { ImageParts } from './types';

const App: React.FC = () => {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [pixarizedImage, setPixarizedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = (imageDataUrl: string) => {
        setOriginalImage(imageDataUrl);
        setPixarizedImage(null);
        setError(null);
    };

    const handleGenerateClick = useCallback(async () => {
        if (!originalImage) {
            setError("Please upload an image first.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setPixarizedImage(null);

        try {
            const imageParts: ImageParts | null = imageDataToParts(originalImage);
            if (!imageParts) {
                throw new Error("Invalid image data format.");
            }
            
            const generatedImage = await generatePixarStyleImage(imageParts.base64, imageParts.mimeType);
            setPixarizedImage(generatedImage);

        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
            console.error("Generation failed:", errorMessage);
            setError(`Failed to generate image. Please try again. Error: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    }, [originalImage]);

    return (
        <div className="min-h-screen bg-brand-dark text-brand-light font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <aside className="lg:col-span-4 bg-brand-gray/20 p-6 rounded-2xl shadow-lg h-fit">
                        <h2 className="text-2xl font-bold mb-4 text-white">Get Started</h2>
                        <p className="text-gray-400 mb-6">Upload a photo to transform it into a Pixar-style masterpiece.</p>
                        <ImageUploader onImageUpload={handleImageUpload} />
                        
                        <div className="mt-8">
                            <CTAButton 
                                onClick={handleGenerateClick} 
                                disabled={!originalImage || isLoading}
                                isLoading={isLoading}
                            />
                        </div>

                        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
                    </aside>

                    <div className="lg:col-span-8">
                        <ImageDisplay 
                            originalImage={originalImage}
                            pixarizedImage={pixarizedImage}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
