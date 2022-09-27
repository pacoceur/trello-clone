import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.brand.secondary};
    color: ${({theme}) => theme.colors.neutral.white};
    height: ${({theme}) => theme.spacing(5)};
    display: flex;
    justify-content: center;
    align-items: center;
`