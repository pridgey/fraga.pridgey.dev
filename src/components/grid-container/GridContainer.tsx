import styled from "styled-components";
import { ReactNode } from "react";

interface StyledGridContainerProps {
  Columns: string;
  Rows: string;
  Gap?: string;
  Areas?: string[];
  Height?: string;
}

const StyledGridContainer = styled.div<StyledGridContainerProps>`
  ${({ Columns, Rows, Gap, Areas, Height }) => `
    display: grid;
    grid-template-columns: ${Columns};
    grid-template-rows: ${Rows};
    gap: ${Gap};
    grid-template-areas: ${`"${Areas?.join(`" "`)}"`};
    height: ${Height};
  `}
`;

interface StyledGridAreaProps {
  Area: string;
  BackgroundColor?: string;
}

const StyledGridArea = styled.div<StyledGridAreaProps>`
  ${({ Area, BackgroundColor }) => `
    grid-area: ${Area};
    background-color: ${BackgroundColor};
  `}
`;

interface GridContainerProps extends StyledGridContainerProps {
  children?: ReactNode;
}

export const GridContainer = (props: GridContainerProps) => (
  <StyledGridContainer {...props}>{props.children}</StyledGridContainer>
);

interface GridAreaProps extends StyledGridAreaProps {
  children?: ReactNode;
}

export const GridArea = ({
  Area,
  BackgroundColor,
  children,
}: GridAreaProps) => (
  <StyledGridArea Area={Area} BackgroundColor={BackgroundColor}>
    {children}
  </StyledGridArea>
);
