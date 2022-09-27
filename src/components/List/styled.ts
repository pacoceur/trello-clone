import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.light};
  color: ${({ theme }) => theme.colors.grey.dark};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(1)};
  margin: 0 ${({ theme }) => theme.spacing(1)} 0 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  min-height: 78px;
  width: 272px;
`;
