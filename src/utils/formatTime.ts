export default function formatTime(time: number) {
    const milliseconds = Math.floor((time / 100) % 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor(time / (1000 * 60) % 60);
    const hours = Math.floor(minutes / (1000 * 60 * 60) % 24);

    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${milliseconds}`;
}