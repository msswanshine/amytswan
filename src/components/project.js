import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project, index } = this.props;

    return (
      <div>
        Hi there!
      </div>
    )
  }
}

export default Project;
