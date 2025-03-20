import React, { useState } from 'react';
import Body from './component/Body';
import Footer from './component/Footer';
import Popup from './component/Popup';
import data from './data/start.json';

function App() {
    const [tasks, setTasks] = useState(data.taches);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Ma TodoList</h1>
            </header>
            <Body data={{ taches: tasks }} />
            <Footer onAddTask={() => setShowPopup(true)} />
            {showPopup && (
                <Popup
                    onClose={() => setShowPopup(false)}
                    onAddTask={handleAddTask}
                />
            )}
        </div>
    );
}

export default App;