import React, { useState } from "react";
import "./SkillsPage.css";
import { skillsData } from "./skillsData";
import { Card } from "react-bootstrap";
import { certificatesData } from "./certificationData";

export const SkillsPage = () => {
  return (
    <div className="Skills">
      <div className="Skills_all_sliders">
        {skillsData.map((slider, index) => (
          <>
            <h1 style={{ color: slider.color }}>{slider.name}</h1>
            <div className="Skills_slider" key={index}>
              <div className="Skills_slider_content" key={index + "a"}>
                {slider.icons.map((iconData, indexxx) => (
                  <div className="Skills_slider_box" key={indexxx}>
                    <p>{iconData.icon}</p>
                    <p>{iconData.name}</p>
                  </div>
                ))}
              </div>
              <div className="Skills_slider_content" key={index + "b"}>
                {slider.icons.map((iconData, indexxx) => (
                  <div className="Skills_slider_box" key={indexxx}>
                    <p>{iconData.icon}</p>
                    <p>{iconData.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
      <div style={{ border: "2px solid lightgrey" }}></div>
      <div className="Skills_certifications">
        <h1>Certifications / Courses</h1>
        <div className="Skills_all_certificates">
          {certificatesData.map((certificate, index) => (
            <>
              <div style={{ border: "1px solid #afafaf" }}></div>
              <div key={index}>
                <h3>{certificate.name}</h3>
                <div className="Skills_certificates_data">
                  {certificate.certificates.map((certificate_info, indexx) => (
                    <Card className="Skills_certificate_card" key={indexx}>
                      <Card.Body>
                        <Card.Title>{certificate_info.name}</Card.Title>
                        <Card.Text>{certificate_info.details}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
