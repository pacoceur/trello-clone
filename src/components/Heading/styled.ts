import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  margin: 0 ${({ theme }) => theme.spacing(2)} 0 0;
`;

export const ButtonWrapper = styled.div`
  margin: 0 ${({ theme }) => theme.spacing(1)} 0 0;
`;
