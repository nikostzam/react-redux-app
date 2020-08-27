import React from "react";
import "./styles/App.scss";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProjectDetails from "./components/ProjectDetails";
import CreateProject from "./components/CreateProject";

const App = ({ projects }) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Dashboard projects={projects} />
        </Route>
        <Route path='/create' exact component={CreateProject} />
        {projects.map((project) => {
          return (
            <Route to={"/project/:id"} key={project.id}>
              <ProjectDetails project={project} />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(App);
