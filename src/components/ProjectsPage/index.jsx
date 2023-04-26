import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { projectsData } from "./projectsData";
import "./ProjectsPage.css";

export const ProjectsPage = () => {
  return (
    <div className="Projects">
      <div className="Projects_data">
        {projectsData.map((project) => (
          <div className="Project_card">
            <img className="Project_image" src={project.image} />
            <div className="Project_data_box">
              <div>
                <h2 className="Project_name">{project.name}</h2>
                <ul className="Project_points">
                  {project.info.map((point) => (
                    <li className="Project_info">{point}</li>
                  ))}
                </ul>
              </div>
              <div className="Project_tech_box">
                <div className="Project_tech">{project.techUsed}</div>
                <a href={project.link} target="_blank" className="Project_tech">
                  Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/projects/all">
        <Button>View All Projects</Button>
      </Link>
    </div>
  );
};
