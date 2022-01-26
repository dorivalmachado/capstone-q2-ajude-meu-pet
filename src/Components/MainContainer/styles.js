import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: ${props => props.containerHeight};
    display: flex;
    justify-content: center;
    background-color: ${props => props.containerBgColor};
`

export const ContentBox = styled.div`
    width: 100%;
    max-width: ${props => props.contentMaxW}
`