import React, { useState } from 'react';
import '../App.css';
import { FaArrowDown } from 'react-icons/fa';

function Body({ data }) {
    const tasks = data.taches;

    return (
        <div className="App-body">
            <section id="tasksContainer">
                <h2>Vos tâches</h2>
                <ul id="tasks">
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </ul>
            </section>
        </div>
    );
}

function TaskItem({ task }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li className="task-item">
            <div className="task-header">
                <div className="task-title">
                    <span>{task.title}</span>
                </div>
                <div className="task-due-date">{task.date_echeance}</div>
                <button onClick={toggleDetails} className={`arrow-button ${showDetails ? 'rotate' : ''}`}>
                    <FaArrowDown />
                </button>
            </div>
            {showDetails && (
                <div className="task-details">
                    <p><strong>Description :</strong> {task.description || "Aucune description"}</p>
                    <p>
                        <strong>Contacts :</strong>
                        {task.contacts.length > 0 ? (
                            task.contacts.map((contact, index) => (
                                <span key={index}>{contact.name}{index < task.contacts.length - 1 ? ", " : ""}</span>
                            ))
                        ) : (
                            " Aucun contact"
                        )}
                    </p>
                </div>
            )}
        </li>
    );
}

export default Body;