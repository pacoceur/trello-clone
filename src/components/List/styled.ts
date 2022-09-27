import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.grey.light};
    color: ${({theme}) => theme.colors.grey.dark};
    border-radius: ${({theme}) => theme.borderRadius.normal};
    padding: ${({theme}) => theme.spacing(2)};
    min-height: 200px;
    width: 272px;
`