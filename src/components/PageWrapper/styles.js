import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.div`
  background: ${theme.ui.default};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 24px;
  padding-top: 24px;

  @media (max-width: 1280px) {
    padding: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;
