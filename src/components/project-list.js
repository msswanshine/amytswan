import React from 'react';
import Project from './project';
import { projects } from './../data/project-data';
import styled from 'styled-components';
import mediaQueries from '../utils/media-queries';

export default function ProjectList() {
  return (
    <ProjectsWrapper>
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
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mediaQueries.ph`
    flex-direction: row;
  `}
`;
