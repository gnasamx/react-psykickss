import styled, { css } from "styled-components";

export const Row = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);

  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) / 2);
    padding-left: calc(var(--bs-gutter-x) / 2);
    margin-top: var(--bs-gutter-y);
  }
`;

const breakpoints = {
  xs: 0,
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const Col = styled.div`
  flex: 0 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  ${respondTo.xs`
    width: ${({ xs }) => xs && `${(xs / 12) * 100}%`};
  `}

  ${respondTo.sm`
    width: ${({ sm }) => sm && `${(sm / 12) * 100}%`};
  `}

  ${respondTo.md`
    width: ${({ md }) => md && `${(md / 12) * 100}%`};
  `}

  ${respondTo.lg`
    width: ${({ lg }) => lg && `${(lg / 12) * 100}%`};
  `}

  ${respondTo.xl`
    width: ${({ xl }) => xl && `${(xl / 12) * 100}%`};
  `}
`;
