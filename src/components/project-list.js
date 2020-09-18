import React from 'react';
import Project from './project';
import { projects } from './../data/project-data';

export default function ProjectList() {
  return (
    <div>
      {
        projects.map((project, index) => {
          return (
            <Project
              project={project}
              index={index}
            />
          )
        })
      }
    </div>
  );
}
