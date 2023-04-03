import { configureStore } from "@reduxjs/toolkit";
import timersReducer from '../features/timers/timersSlice'

export const store = configureStore({
    reducer: {
        timers: timersReducer
    }
})

// Export for TS Typings
export type RootState = ReturnType<typeof store.getState>