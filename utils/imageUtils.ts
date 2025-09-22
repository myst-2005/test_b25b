
import type { ImageParts } from '../types';

export function imageDataToParts(imageDataUrl: string): ImageParts | null {
    const match = imageDataUrl.match(/^data:(image\/[a-zA-Z+]+);base64,(.*)$/);
    if (!match || match.length !== 3) {
        console.error("Invalid data URL format");
        return null;
    }
    return {
        mimeType: match[1],
        base64: match[2],
    };
}
