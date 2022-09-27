import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  color: ${({ theme }) => theme.colors.grey.dark};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
  margin: 0 0 ${({ theme }) => theme.spacing(1)} 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
