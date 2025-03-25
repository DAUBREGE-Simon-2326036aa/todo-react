import React, { useState } from 'react';
import '../App.css';

function Popup({ onClose, onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [contacts, setContacts] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,
            date_creation: new Date().toLocaleDateString('fr-FR'), // Date actuelle
            date_echeance: new Date().toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }),
            done: false,
            urgent: false,
            contacts: contacts.split(',').map(name => ({ name: name.trim() })),
        };
        onAddTask(newTask);
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h3>Ajouter une tâche</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Titre :</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description :</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date d'échéance :</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contacts (séparés par des virgules) :</label>
                        <input
                            type="text"
                            value={contacts}
                            onChange={(e) => setContacts(e.target.value)}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="button" onClick={onClose}>Annuler</button>
                        <button type="submit">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Popup;