import styled from "styled-components";
import { Reorder } from "framer-motion";

interface CardProps {}

export const Container = styled(Reorder.Item)<CardProps>`
  list-style: none;

  ${({ theme }) => `
    background-color: ${theme.colors.neutral.white};
    box-shadow: ${theme.boxShadow.normal};
    color: ${theme.colors.grey.dark};
    border-radius: ${theme.borderRadius.normal};
    padding: ${theme.spacing(1)} ${theme.spacing(1)};
    margin: 0 0 ${theme.spacing(1)} 0;
    font-size: ${theme.fontSizes.small};
  `}
`;
