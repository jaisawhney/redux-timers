interface CreateTimer {
    name: string;
    description: string;
    time: number;
    isRunning: boolean;
}

export function createTimer(name: string, description: string) : CreateTimer {
    return {
        name,
        description,
        time: 0,
        isRunning: false
    }
}