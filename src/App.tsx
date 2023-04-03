import React from 'react';
import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
    return (
        <div className="w-full flex flex-col items-center p-4">
            <NewTimer/>
            <ListTimers/>
        </div>
    );
}

export default App;
