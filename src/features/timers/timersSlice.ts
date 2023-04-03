import {createSlice} from '@reduxjs/toolkit'
import {createTimer} from '../../utils/createTimer';

interface Timer {
    name: string;
    description: string;
    time: number;
    isRunning: boolean;
}

interface InitialState {
    value: Timer[]
}

const initialState: InitialState = {
    value: []
}

export const timersSlice = createSlice({
    name: 'timers',
    initialState,
    reducers: {
        addTimer: (state, action) => {
            const {name, description} = action.payload;
            const timer = createTimer(name, description);
            state.value.push(timer);
        },
        removeTimer: (state, action) => {
            state.value.splice(action.payload, 1);
        },
        toggleTimer: (state, action) => {
            const timer = state.value[action.payload]
            timer.isRunning = !timer.isRunning
        },
        updateTimer: (state, action) => {
            state.value.forEach(timer => {
                if (timer.isRunning) timer.time += action.payload;
            });
        }
    },
})

// Action creators are generated for each case reducer function
export const {addTimer, toggleTimer, updateTimer, removeTimer} = timersSlice.actions

export default timersSlice.reducer