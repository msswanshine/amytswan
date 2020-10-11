import { css } from 'emotion';

const slideItem = css`
  height: 100%;
  width: 100%;

  .image-wrapper {
    border-radius: 10px;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
    }

    .flip-card-inner {
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      width: 100%;
    }

    &.active .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      backface-visibility: hidden;
      height: 100%;
      overflow: hidden;
      width: 100%;
    }

    .flip-card-front {
      color: black;
    }

    .flip-card-back {
      background-color: #61639e;
      color: white;
      position: absolute;
      top: 0;
      transform: rotateY(180deg);
    }
  }
`;

export default slideItem;
