import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => `
    margin: 0 0 ${theme.spacing(2)};
  `}
`;

export const Title = styled.h1`
  font-weight: bold;

  ${({ theme }) => `
    color: ${theme.colors.neutral.white};
    font-size: ${theme.fontSizes.medium};
    margin: 0 ${theme.spacing(2)} 0 0;
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => `
    margin: 0 ${theme.spacing(1)} 0 0;
  `}
`;
