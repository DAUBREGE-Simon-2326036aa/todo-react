import React, { useState } from 'react';

const CategoryPopup = ({ onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        color: '#cccccc'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title) return;
        onAdd(formData);
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h3>Ajouter une Catégorie</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Nom de la catégorie</label>
                        <input
                            id="title"
                            type="text"
                            value={formData.title}
                            onChange={e => setFormData({...formData, title: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="color">Couleur</label>
                        <input
                            id="color"
                            type="color"
                            value={formData.color}
                            onChange={e => setFormData({...formData, color: e.target.value})}
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={onClose}>
                            Annuler
                        </button>
                        <button type="submit">
                            Créer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryPopup;