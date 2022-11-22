import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-x: auto;

  ${({ theme }) => `
    background-color: ${theme.colors.brand.primary};
    padding: ${theme.spacing(2.5)} 0;
  `}
`;

export const ListWrapper = styled.div`
  display: flex;

  ${({ theme }) => `
    gap: ${theme.spacing(1)};
    padding: 0 ${theme.spacing(4)};
  `}

  div, form {
    flex-shrink: 0;
  }
`;

export const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  width: 272px;
  cursor: pointer;
  user-select: none;

  ${({ theme }) => `
    color: ${theme.colors.neutral.white};
    font-size: ${theme.fontSizes.small};
    margin: 0 0 ${theme.spacing(0.5)} 0;
    padding: ${theme.spacing(1.5)} ${theme.spacing(2.5)};
    border-radius: ${theme.borderRadius.normal};
  `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    cursor: initial;

    ${({ theme }) => `
      color: ${theme.colors.grey.medium};
      background-color: ${theme.colors.neutral.white};
      box-shadow: ${theme.boxShadow.normal};
  `}
  }
`;
