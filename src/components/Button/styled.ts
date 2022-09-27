import styled from "styled-components";

interface IconWrapperProps {
  hasLabel: boolean;
}

export const StyledButton = styled.button`
  display: flex;
  background-color: rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(0.7)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ hasLabel, theme }) =>
    hasLabel &&
    `
      margin: 0 ${theme.spacing(1)} 0 0;
    `}
`;
