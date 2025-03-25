import React, { useState } from 'react';
import '../App.css';
import { FaArrowDown } from 'react-icons/fa';

function Body({ data }) {
    const [tasks, setTasks] = useState(data.taches);
    const [showCompleted, setShowCompleted] = useState(false);

    const toggleDone = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, done: !task.done } : task
        ));
    };

    const filteredTasks = showCompleted
        ? tasks.filter(task => task.done)
        : tasks;

    return (
        <div className="App-body">
            <section id="tasksContainer">
                <div className="filter-control">
                    <button
                        onClick={() => setShowCompleted(!showCompleted)}
                        className={`filter-button ${showCompleted ? 'active' : ''}`}
                    >
                        {showCompleted ? "Toutes les tâches" : "Tâches terminées"}
                    </button>
                </div>

                <h2>Vos tâches ({filteredTasks.length})</h2>

                <ul id="tasks">
                    {filteredTasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleDone={toggleDone}
                            data={data}
                        />
                    ))}
                </ul>
            </section>
        </div>
    );
    function TaskItem({ task, toggleDone, data }) {
        const [showDetails, setShowDetails] = useState(false);

        const getCategory = (taskId) => {
            const relation = data.relations.find(r => r.tache === taskId);
            if (!relation) return null;
            return data.categories.find(c => c.id === relation.categorie)?.title;
        };

        return (
            <li className="task-item">
                <div className="task-header">
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={(e) => {
                            e.stopPropagation();
                            toggleDone(task.id);
                        }}
                        className="task-checkbox"
                    />
                    <div className="task-title" onClick={() => setShowDetails(!showDetails)}>

                    <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                        {task.title}
                        {getCategory(task.id) && <i> ({getCategory(task.id)})</i>}
                    </span>
                    </div>

                    <div className="task-meta" onClick={() => setShowDetails(!showDetails)}>
                        <span className="due-date">{task.date_echeance}</span>
                        <button className={`arrow-button ${showDetails ? 'rotate' : ''}`}>
                            <FaArrowDown/>
                        </button>
                    </div>
                </div>

                {showDetails && (
                    <div className="task-details">
                        <p><strong>Description :</strong> {task.description || "Aucune description"}</p>
                        <p>
                            <strong>Contacts :</strong>
                            {task.contacts.length > 0 ? (
                                task.contacts.map((contact, index) => (
                                    <span key={index}>
                                    {contact.name}
                                        {index < task.contacts.length - 1 ? ", " : ""}
                                </span>
                                ))
                            ) : " Aucun contact"}
                        </p>
                    </div>
                )}
            </li>
        );
    }
}



export default Body;