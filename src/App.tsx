import React from 'react';
import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
    return (
        <div className="flex justify-center p-5">
            <div>
                <NewTimer/>
                <ListTimers/>
            </div>
        </div>
    );
}

export default App;
