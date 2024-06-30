"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Finance Tracker Application",
    description: "Manage you Finances with ease!",
    image: "/images/projects/1.png",
    tag: ["All", "Fullstack"],
    path: "https://finance-track-app.vercel.app/",
    gitPath:"https://github.com/bhavkushwaha/Finance-Tracker-v2",
  },
  {
    id: 2,
    title: "Logistics Website",
    description: "A website for a logistics company",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    path: "https://swastiklogistics.netlify.app/",
    gitPath:"https://github.com/bhavkushwaha/SwastikLogistics",
  },
  {
    id: 3,
    title: "Consultancy Website",
    description: "A website for a consultancy firm",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    path: "https://jhumpus.netlify.app/",
    gitPath:"https://github.com/bhavkushwaha/Jhumpus",
  },
  {
    id: 4,
    title: "Notes Keeper App",
    description: "A simple notes keeper app",
    image: "/images/projects/4.png",
    tag: ["All", "Fullstack"],
    path: "https://keeper-by-bhav.netlify.app/",
    gitPath:"https://github.com/bhavkushwaha/ReactJs-PracticeProjects",
  },
  {
    id: 5,
    title: "Finance Chatbot",
    description: "A chatbot to manage your finances",
    image: "/images/projects/5.png",
    tag: ["All", "Fullstack"],
    path: "https://finanalysis-chatbot.onrender.com/",
    gitPath:"https://github.com/bhavkushwaha/FinAnalysis-Chatbot",
  },
  {
    id: 6,
    title: "Travel Agency Website",
    description: "A website for a travel agency",
    image: "/images/projects/6.png",
    tag: ["All", "Frontend"],
    path: "https://trvl-by-bhav.netlify.app/",
    gitPath:"https://github.com/bhavkushwaha/TRVL-WebApp",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={ {duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              path={project.path}
              gitPath={project.gitPath}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
