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
      </ProjectCard>
    )
  }
}

export default Project;

const ProjectCard = styled.div`
  margin-bottom: 30px;

  ${mediaQueries.ph`
    flex: 0 1 48%;
  `}

  ${mediaQueries.md`
    flex: 1 0 32%;
  `}

  ${mediaQueries.lg`
    flex: 0 1 32%;
  `}
`;

const ImageWrapper = styled.div`
  img {
    border: 2px solid #e9e9e9;
    display: block;
    width: 100%;
  }
`;
