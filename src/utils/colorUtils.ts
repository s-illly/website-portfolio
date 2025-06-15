export function getContrastingTextColor(hexColor: string): string {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate luminance (perceived brightness)
    // Formula: L = 0.2126 * R + 0.7152 * G + 0.0722 * B (for sRGB)
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    // Use a threshold to determine text color
    // A common threshold is 0.5 (for white on dark, black on light)
    return luminance > 0.5 ? 'black' : 'white';
} 