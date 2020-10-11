import React from 'react';
import { string, number, bool } from 'prop-types';
import { css } from 'emotion';

const Dot = ({ active }) => (
  <span
    className={css`
      padding: 6px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? '#2e3540' : '#8f888e'};
      transition: background 0.3s;
    `}
  />
);

const Dots = ({ projects, activeIndex }) => (
  <div
    className={css`
      position: absolute;
      bottom: 0px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {projects.map((slide, i) => (
      <Dot key={`dots_${slide.id}`} active={activeIndex === i} />
    ))}
  </div>
);

Dot.propTypes = {
  active: bool.isRequired,
};

Dots.propTypes = {
  projects: string,
  activeIndex: number.isRequired,
};

Dots.defaultProps = {
  projects: '',
};

export default Dots;
