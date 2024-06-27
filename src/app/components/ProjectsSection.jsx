"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Finance Tracker Application",
    description: "Manage you Finances with ease!",
    image: "/images/projects/1.png",
    tag: ["All", "Fullstack"],
  },
  {
    id: 2,
    title: "Logistics Website",
    description: "A website for a logistics company",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
  },
  {
    id: 3,
    title: "Consultancy Website",
    description: "A website for a consultancy firm",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
  },
  {
    id: 4,
    title: "Notes Keeper App",
    description: "A simple notes keeper app",
    image: "/images/projects/4.png",
    tag: ["All", "Fullstack"],
  },
  {
    id: 5,
    title: "Finance Chatbot",
    description: "A chatbot to manage your finances",
    image: "/images/projects/5.png",
    tag: ["All", "Fullstack"],
  },
  {
    id: 6,
    title: "Travel Agency Website",
    description: "A website for a travel agency",
    image: "/images/projects/6.png",
    tag: ["All", "Frontend"],
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Frontend"
          onClick={handleTagChange}
          isSelected={tag === "frontend"}
        />
        <ProjectTag
          name="Fullstack"
          onClick={handleTagChange}
          isSelected={tag == "fullstack"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;