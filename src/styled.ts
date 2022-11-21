import styled from 'styled-components';

export const Body = styled.div`
  height: 100vh;
  width: 100%;

  ${({ theme }) => `
    background-color: ${theme.colors.brand.primary};
    padding: ${theme.spacing(2.5)} ${theme.spacing(4)};
  `}
`;

export const ListWrapper = styled.div`
  display: inline-flex;
  min-width: 100%;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  width: 100%;
  cursor: pointer;

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
