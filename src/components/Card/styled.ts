import styled from 'styled-components';

export const Container = styled.div`
  list-style: none;

  ${({ theme }) => `
    background-color: ${theme.colors.neutral.white};
    box-shadow: ${theme.boxShadow.normal};
    color: ${theme.colors.grey.dark};
    border-radius: ${theme.borderRadius.normal};
    padding: ${theme.spacing(1)} ${theme.spacing(1)};
    font-size: ${theme.fontSizes.small};
  `}
`;
