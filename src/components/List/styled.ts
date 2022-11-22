import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-height: 75vh;
  width: 272px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  ${({ theme }) => `
    background-color: ${theme.colors.grey.light};
    color: ${theme.colors.grey.dark};
    border-radius: ${theme.borderRadius.normal};
    padding: ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(0.5)};
    font-size: ${theme.fontSizes.medium};
    gap: ${theme.spacing(1)};
  `}
`;

export const Title = styled.p`
  font-weight: bold;

  ${({ theme }) => `
    padding: 0 0 0 ${theme.spacing(1)};
    font-size: ${theme.fontSizes.small};
  `}
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  user-select: none;

  ${({ theme }) => `
    color: ${theme.colors.grey.medium};
    font-size: ${theme.fontSizes.small};
    margin: 0 0 ${theme.spacing(0.5)} 0;
    padding: ${theme.spacing(1)} ${theme.spacing(1)};
    border-radius: ${theme.borderRadius.normal};
  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    cursor: initial;

    ${({ theme }) => `
    background-color: ${theme.colors.neutral.white};
    box-shadow: ${theme.boxShadow.normal};
  `}
  }
`;
