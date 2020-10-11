import { css } from 'emotion';

const slideItem = css`
  height: 100%;
  margin: 8px 16px;
  min-width: 288px;

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
      position: relative;
      transform-style: preserve-3d;

      .card-overlay {
        align-items: center;
        background-color: rgba(250, 250, 250, 0.85);
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: 0;
        opacity: 1;
        position: absolute;
        right: 0;
        transition: opacity 0.3s;
        top: 0;
        z-index: 1;

        &:focus,
        &:hover {
          opacity: 0;
        }

        .text-wrapper {
          padding: 16px;
          text-align: center;
        }
      }
    }

    .flip-card-back {
      background-color: #8082c2;
      bottom: 0;
      color: white;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform: rotateY(180deg);

      .text-wrapper {
        padding: 20px;
      }
    }
  }
`;

export default slideItem;
