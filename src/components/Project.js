import React from "react";

function Project({ title, description, link, image }) {
  return (
    <div className="project-item">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  );
}

export default Project;
