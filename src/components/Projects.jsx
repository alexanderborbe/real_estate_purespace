import React from "react";
import { projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div
      className="container mx-auto py-16 px-6 md:px-20 lg:px-32 my-20 w-full"
      id="Projects"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects Completed
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Scrollable projects with snap */}
      <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
        <div className="flex">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center min-w-[280px] sm:min-w-[350px] lg:min-w-[400px] relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-80 h-100 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-3 left-3 bg-white px-4 py-2 shadow-md rounded">
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {project.location} <span className="px-1">|</span>{" "}
                  {project.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
