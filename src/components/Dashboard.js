import React from "react";
import ProjectSummary from "../components/ProjectSummary";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard = ({ projects }) => {
  console.log(projects);

  return (
    <div className='container'>
      <div className='dashboard-wrapper'>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <Link to={"/project/" + project.id}>
                  <ProjectSummary project={project} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}
export default connect(mapStateToProps)(Dashboard);
