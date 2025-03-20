import React from 'react';

function Header ({data}) {
    const totalTasks = data.taches.length;
    const tasksInProgress = data.taches.filter(tache => !tache.done).length;
    const tasksDisplayed = totalTasks;

    return (
        <header class={"App-header"}>
            <h1>Todo amU</h1>
            <p>{totalTasks} Tâches dont {tasksInProgress} En cours ({tasksDisplayed} Affichées)</p>
        </header>
    );
}

export default Header;