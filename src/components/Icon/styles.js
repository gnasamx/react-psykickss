import styled from "styled-components";

export const Svg = styled.svg`
  width: ${({ size }) => (size && `${size}px`) || "24px"};
  height: ${({ size }) => (size && `${size}px`) || "24px"};
  display: inline-block;
  fill: ${({ color }) => color || "#000"};

  
`;
