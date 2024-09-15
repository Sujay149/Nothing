// src/pages/InnovationProjects.js

import React from 'react';
import './InnovationProjects.css'; // Create this CSS file for styling

const InnovationProjectsPage = () => {
    return (
        <div className="innovation-projects">
            <header className="header">
                <h1>Innovation Projects</h1>
            </header>
            <section className="projects-list">
                <h2>Ongoing Innovation Projects</h2>
                <ul>
                    {/* Replace with dynamic content */}
                    <li>
                        <h3>Project Title 1</h3>
                        <p>Description of the first innovation project.</p>
                    </li>
                    <li>
                        <h3>Project Title 2</h3>
                        <p>Description of the second innovation project.</p>
                    </li>
                    {/* Add more projects as needed */}
                </ul>
            </section>
            <section className="add-project">
                <h2>Add New Project</h2>
                <form>
                    <label>
                        Project Title:
                        <input type="text" name="title" />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" />
                    </label>
                    <button type="submit">Add Project</button>
                </form>
            </section>
        </div>
    );
};

export default InnovationProjectsPage;
