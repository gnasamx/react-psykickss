import styled from "styled-components";

export const Svg = styled.svg`
  width: ${({ size }) => (size && `${size}px`) || "24px"};
  height: ${({ size }) => (size && `${size}px`) || "24px"};
  display: inline-block;
  fill: ${({ color }) => color || "#000"};
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 1s;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const TrackPath = styled.path`
  fill: #000;
  opacity: 0.16;
`;

export const ActivePath = styled.path`
  fill: ${({ color }) => (color && color) || "#000"};
`;
