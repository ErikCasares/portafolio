import React from "react";
import Project from "./Project";

function Projects() {
  const projectsData = [
    {
      title: "Dragon Ball FANPage",
      description: "Dragon Ball FANPage es un proyecto desarrollado con HTML5, CSS3 y JavaScript. Implementé diseño responsive y animaciones CSS para una experiencia dinámica. El proyecto me ayudó a mejorar mis habilidades en maquetación y en funciones interactivas con JavaScript, creando una web visualmente atractiva y funcional para los fans de Dragon Ball.",
      link: "https://erikcasares.github.io/DragonBall-FANPage/",
      image: "/images/dragonball.png"  // Reemplazá esto con la URL o ruta de tu imagen
    },
    {
      title: "Calculadora",
      description: "Este proyecto es una calculadora funcional desarrollada con HTML5, CSS3 y JavaScript puro. Implementé funciones básicas como suma, resta, multiplicación y división, junto con un diseño simple y responsivo para asegurar su uso en dispositivos móviles. Este proyecto me permitió fortalecer mis habilidades en la manipulación del DOM y en la lógica de operaciones matemáticas dentro de una aplicación web.",
      link: "https://erikcasares.github.io/ProyectoFinal-Casares/pages/calculadora.html",
      image: "/images/calculadora.png"  // Reemplazá esto con la URL o ruta de tu imagen
    },
    {
        title: "Proyecto 2",
        description: "Descripción breve del proyecto 2.",
        link: "https://enlaceproyecto2.com",
        image: "/path/to/image2.jpg"  // Reemplazá esto con la URL o ruta de tu imagen
      },
      {
        title: "Proyecto 2",
        description: "Descripción breve del proyecto 2.",
        link: "https://enlaceproyecto2.com",
        image: "/path/to/image2.jpg"  // Reemplazá esto con la URL o ruta de tu imagen
      },
    // Agregá más proyectos aquí
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <Project 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
