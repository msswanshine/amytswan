import styled from '@emotion/styled';

const SliderContent = styled.div`
  display: flex;
  height: 100%;
  margin-left: -4px;
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  width: ${(props) => props.width}px;
`;

export default SliderContent;
