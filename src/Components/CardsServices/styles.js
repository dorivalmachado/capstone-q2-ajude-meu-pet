import styled from "styled-components";

export const Container = styled.div`
    div:nth-child(3n + 1) > .inner{
        background-color:blue;

    }
    
    div:nth-child(3n + 2) > .inner{
        background-color:red;

    }
    
    div:nth-child(3n + 3) > .inner{
        background-color:yellow;

    }
`

export const Card = styled.div`
    background-color: transparent;
    width: 224px;
    height: 272px;
    border-radius: 10px;
    perspective: 1000px;
    /* position: relative; */
    /* transition: transform 0.6s; */
    /* transform-style: preserve-3d; */

    .inner{
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    :hover .inner{
        transform: rotateY(180deg);
    }
`

export const CardFront = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

export const CardBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`