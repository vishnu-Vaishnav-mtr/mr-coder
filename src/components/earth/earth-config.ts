export type WeatherMode = 'sunny' | 'rainy' | 'snowy' | 'winter';

export const WEATHER_PARAMS = {
    sunny: {
        bg: "#0f172a", // Slate 900
        ambientIntensity: 0.8,
        sunIntensity: 2,
        fogColor: "#0f172a",
        fogDensity: 0.02,
        cloudOpacity: 0.3,
        particleColor: "#fbbf24", // Warm sun mote
        particleCount: 50,
    },
    rainy: {
        bg: "#020617", // Slate 950 (Darker)
        ambientIntensity: 0.2,
        sunIntensity: 0.5,
        fogColor: "#020617",
        fogDensity: 0.05,
        cloudOpacity: 0.8,
        particleColor: "#60a5fa", // Blue rain
        particleCount: 1500,
    },
    snowy: {
        bg: "#172554", // Blue 950
        ambientIntensity: 0.5,
        sunIntensity: 0.8,
        fogColor: "#172554",
        fogDensity: 0.04,
        cloudOpacity: 0.6,
        particleColor: "#ffffff", // White snow
        particleCount: 800,
    },
    winter: {
        bg: "#082f49", // Sky 950
        ambientIntensity: 0.6,
        sunIntensity: 1.2, // Crisp bright winter sun
        fogColor: "#082f49",
        fogDensity: 0.03,
        cloudOpacity: 0.4,
        particleColor: "#a5f3fc", // Cyan frost
        particleCount: 200,
    },
};

// Location markers for the Earth globe
export const MARKERS = [
    {
        lat: 28.6139,
        lng: 77.2090,
        label: "Mr. Coder",
        subLabel: "New Delhi, India",
        color: "#22d3ee" // Cyan
    }
];

// Helper to convert Lat/Lng to Vector3 on a sphere of radius R
export function latLngToVector3(lat: number, lng: number, radius: number) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return [x, y, z] as [number, number, number];
}
