import React from 'react';
import styled from 'styled-components';
import Project from './project';
import projects from '../data/project-data';
import mediaQueries from '../utils/media-queries';

export default function ProjectList() {
  return (
    <Main id="main">
      <h2>Projects</h2>
      <ProjectsWrapper>
        {
          projects.map((project, index) => (
            <Project
              project={project}
              index={index}
            />
          ))
        }
      </ProjectsWrapper>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 60px;
  h2 {
    text-align: center;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -1%;

  ${mediaQueries.ph`
    flex-direction: row;
  `}
`;
