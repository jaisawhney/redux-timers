interface Timer {
    name: string;
    time: number;
    isRunning: boolean;
}

export default function createTimer(name: string) : Timer {
    return {
        name,
        time: 0,
        isRunning: false
    }
}