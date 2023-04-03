import {configureStore} from "@reduxjs/toolkit";
import {updateTimer} from "../features/timers/timersSlice";
import timersReducer from '../features/timers/timersSlice'

setInterval(() => {
    store.dispatch(updateTimer(100));
}, 100);

export const store = configureStore({
    reducer: {
        timers: timersReducer
    }
})

// Export for TS Typings
export type RootState = ReturnType<typeof store.getState>