import React from "react";
import { Table } from "react-bootstrap";
import "./AllProjects.css";
import { allProjectsData } from "./allProjectsData";

export const AllProjects = () => {
  return (
    <div className="AllProjects">
      <div className="AllProjects_section">
        {allProjectsData.map((projects) => (
          <div className="AllProjects_project_section">
            <h2>{projects.name}</h2>
            <Table bordered hover responsive>
              <thead>
                <tr>
                  {projects.columns.map((columnName) => (
                    <th>{columnName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projects.rows.map((row) => (
                  <tr>
                    {row.map((rowData) =>
                      typeof rowData == "string" ? (
                        <td>{rowData}</td>
                      ) : (
                        <td>
                          <a href={rowData.href} target="_blank">
                            Link
                          </a>
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};
