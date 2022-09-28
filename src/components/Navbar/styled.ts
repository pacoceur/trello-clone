import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => `
    background-color: ${theme.colors.brand.secondary};
    padding: ${theme.spacing(0.5)} ${theme.spacing(4)};
  `}
`;

export const SideItem = styled.div`
  flex: 1;
`

export const Logo = styled.div`
  font-weight: bold;

  ${({ theme }) => `
    color: ${theme.colors.neutral.white};
    font-size: ${theme.fontSizes.large};
  `}
`;