import React, { useState } from 'react';
import Body from './component/Body';
import Footer from './component/Footer';
import Popup from './component/Popup';
import CategoryPopup from './component/CategoryPopup';
import data from './data/start.json';

function App() {
    const [tasks, setTasks] = useState(data.taches);
    const [categories, setCategories] = useState(data.categories);
    const [showTaskPopup, setShowTaskPopup] = useState(false);
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);


    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleAddCategory = (newCategory) => {
        setCategories([...categories, {
            ...newCategory,
            id: Date.now(),
            color: newCategory.color || '#cccccc'
        }]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Ma TodoList</h1>
            </header>
            <Body data={ data } />
            <Footer
                onAddTask={() => setShowTaskPopup(true)}
                onAddCategory={() => setShowCategoryPopup(true)}
            />
            {showTaskPopup && (
                <Popup
                    onClose={() => setShowTaskPopup(false)}
                    onAdd={handleAddTask}
                    type="task"
                />
            )}

            {showCategoryPopup && (
                <CategoryPopup
                    onClose={() => setShowCategoryPopup(false)}
                    onAdd={handleAddCategory}
                />
            )}
        </div>
    );
}

export default App;