import React from 'react';
import '../App.css';

function Footer({ onAddTask, onAddCategory }) {
    return (
        <footer className="App-footer">
            <div id="addtask">
                <button onClick={onAddTask}>Ajouter une tâche</button>
            </div>
            <div id="addcategory">
                <button onClick={onAddCategory}>Ajouter une catégorie</button>
            </div>
        </footer>

    );
}

export default Footer;