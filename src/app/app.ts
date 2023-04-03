import {loadState, saveState} from '../utils/persistState'
import {configureStore} from '@reduxjs/toolkit';
import {updateTimer} from '../features/timers/timersSlice';
import timersReducer from '../features/timers/timersSlice';
import throttle from 'lodash/throttle';

setInterval(() => {
    store.dispatch(updateTimer(100));
}, 100);

export const store = configureStore({
    reducer: {
        timers: timersReducer
    },
    preloadedState: loadState()
});

store.subscribe(throttle(() => {
    saveState(store.getState())
}));


// Export for TS Typings
export type RootState = ReturnType<typeof store.getState>