import React from 'react';
const Project = ({ title, description, imageUrl }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={imageUrl} alt={title} />
        </div>
    );
}

export default Project;