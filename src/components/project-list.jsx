import React from 'react';
import styled from 'styled-components';
import Project from './project';
import projects from '../data/project-data';
import Slider from './slider/slider';
import mediaQueries from '../utils/media-queries';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
];

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
      <Slider
        slides={images}
      />
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
