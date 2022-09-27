import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(4)};
  display: flex;
  align-items: center;
`;

export const SideItem = styled.div`
  flex: 1;
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;