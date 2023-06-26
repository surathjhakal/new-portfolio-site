import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { FaDownload, FaGraduationCap } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import "./AboutPage.css";
import {
  aboutData,
  aboutEducationData,
  aboutExperienceData,
} from "./aboutPageData";
import MyResume from "../../assets/resume.pdf";

export const AboutPage = () => {
  const [educationSelected, setEducationSelected] = useState(true);
  return (
    <div className="About">
      <div className="About_page1">
        <div className="About_image">
          <img
            src="https://img.freepik.com/premium-vector/hand-drawn-flat-design-metaverse-background_23-2149272274.jpg"
            alt=""
            style={{ border: "1px solid lightgrey" }}
          />
        </div>
        <div className="About_details">
          <h3>About Me</h3>
          <h5>{aboutData.tags}</h5>
          <div className="About_details_content">
            {aboutData.details.map((data) => (
              <span>{data}</span>
            ))}
          </div>

          <a href={MyResume} download={"resume.pdf"} className="About_resume">
            <FaDownload className="About_download_icon" />
            Resume
          </a>
        </div>
      </div>
      <div style={{ border: "2px solid lightgrey" }}></div>
      <div className="About_page2">
        <h1>Qualifications</h1>
        <h3>My Personal Journey</h3>
        <div className="About_qualifications">
          <div
            className={`About_qualifications_details ${
              educationSelected && "active_qualification"
            }`}
            onClick={() => setEducationSelected(true)}
          >
            <FaGraduationCap size={20} />
            Education
          </div>
          <div
            className={`About_qualifications_details ${
              !educationSelected && "active_qualification"
            }`}
            onClick={() => setEducationSelected(false)}
          >
            <IoMdBriefcase size={20} />
            Experience
          </div>
        </div>
        <div
          className={`About_timeline ${educationSelected && "show_education"}`}
        >
          {aboutEducationData.map((data, index) => (
            <div
              className={`About_timeline_container ${
                index % 2 == 0 ? "left_container" : "right_container"
              }`}
            >
              <div className="About_timeline_content">
                <h2>{data.class}</h2>
                <p>{data.college}</p>
                <div className="About_timeline_duration">
                  <BiCalendar />
                  {data.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`About_timeline ${
            !educationSelected && "show_experience"
          }`}
        >
          {aboutExperienceData.map((data, index) => (
            <div
              className={`About_timeline_container ${
                index % 2 == 0 ? "left_container" : "right_container"
              }`}
            >
              <div className="About_timeline_content">
                <h2>{data.role}</h2>
                <p>{data.company}</p>
                <div className="About_timeline_duration">
                  <BiCalendar />
                  {data.duration}
                </div>
                <ul className="Project_points">
                  {data.learnings.map((point) => (
                    <li className="Project_info">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
