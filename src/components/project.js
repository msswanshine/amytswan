import React from 'react';
import styled from 'styled-components';
import mediaQueries from '../utils/media-queries';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project, index } = this.props;

    return (
      <ProjectCard>
        <ImageWrapper>
          <img src={project.image} alt={`${project.name}\'s website`}/>
        </ImageWrapper>
        <TextWrapper>
          <h3>{project.name}</h3>
          <p>{project.role}</p>
        </TextWrapper>
      </ProjectCard>
    )
  }
}

export default Project;

const ProjectCard = styled.div`
  margin-bottom: 40px;

  ${mediaQueries.ph`
    flex: 0 1 48%;
    margin: 0 1%;
  `}

  ${mediaQueries.lg`
    flex: 0 1 31%;
  `}
`;

const ImageWrapper = styled.div`
  img {
    border: 2px solid #e9e9e9;
    display: block;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;
