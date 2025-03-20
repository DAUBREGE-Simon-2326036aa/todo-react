import React from 'react';
import '../App.css';

function Footer({ onAddTask }) {
    return (
        <footer className="App-footer">
            <div id="addtask">
                <button onClick={onAddTask}>Ajouter une tâche</button>
            </div>
        </footer>
    );
}

export default Footer;