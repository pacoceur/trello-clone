import styled from "styled-components";

export const Container = styled.div`
    color: ${({theme}) => theme.colors.neutral.white};
    margin: 0 0 ${({theme}) => theme.spacing(2)};
`