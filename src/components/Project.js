import React from "react";
import ProjectList from "./ProjectList";
import {data} from "../constants/data";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let projects=data.map(project => {
      <Project
        key={data.id}
        name={project.name}
      />
    return(
      <div>
        {projects}
      </div>
      )
    })
  }
}
export default Project;
