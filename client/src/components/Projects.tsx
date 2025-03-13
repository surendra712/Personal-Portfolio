import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Projects/projects.json") // Adjust the path based on your project structure
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              ) : (
                <span>Project link not available</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
  );
};

export default Projects;
