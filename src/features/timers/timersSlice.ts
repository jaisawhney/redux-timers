import {createSlice} from '@reduxjs/toolkit'
import timer from './Timer'

interface Timer {
    name: string;
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
            state.value.push((new (timer as any)(action.payload)) as Timer);
        },
        toggleTimer: (state, action) => {
            const timer = state.value[action.payload]
            timer.isRunning = !timer.isRunning
        }
    },
})

// Action creators are generated for each case reducer function
export const {addTimer, toggleTimer} = timersSlice.actions

export default timersSlice.reducer