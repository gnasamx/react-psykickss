import styled from "styled-components";
import { percentage, respondTo } from "./utils";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  ${respondTo.xs`
    flex: ${({ xs }) => xs && `0 0 ${percentage(xs)}`};
    max-width: ${({ xs }) => xs && percentage(xs)}
  `}

  ${respondTo.sm`
    flex: ${({ sm }) => sm && `0 0 ${percentage(sm)}`};
    max-width: ${({ sm }) => sm && percentage(sm)}
  `}

  ${respondTo.md`
    flex: ${({ md }) => md && `0 0 ${percentage(md)}`};
    max-width: ${({ md }) => md && percentage(md)}
  `}

  ${respondTo.lg`
    flex: ${({ lg }) => lg && `0 0 ${percentage(lg)}`};
    max-width: ${({ lg }) => lg && percentage(lg)}
  `}

  ${respondTo.xl`
    flex: ${({ xl }) => xl && `0 0 ${percentage(xl)}`};
    max-width: ${({ xl }) => xl && percentage(xl)}
  `}
`;
