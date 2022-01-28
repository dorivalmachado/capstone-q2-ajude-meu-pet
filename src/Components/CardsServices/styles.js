import styled from "styled-components";

export const Container = styled.div`

    padding: 30px ;
    width: 100%;
    overflow: auto;

    > div{
        display: flex;
        width: 700px;
        justify-content: space-between;

        div:nth-child(3n + 1) > .inner{
            background-color: var(--blue50);

        }
        
        div:nth-child(3n + 2) > .inner{
            background-color: #FFF5DB;

        }
        
        div:nth-child(3n + 3) > .inner{
            background-color: var(--caramel25);

        }
    }

    @media screen and (min-width: 900px){
        > div{
            width: 100%;
            justify-content: space-around;
        }
    }
`

export const Card = styled.div`
    background-color: transparent;
    width: 224px;
    height: 272px;
    border-radius: 10px;
    perspective: 1000px;
    overflow: hidden;

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
    font-size: 24px
`

export const CardBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 15px;
    display: flex;
    flex-direction: column:
    justify-content: space-between;

    p{
        margin-bottom: 10px;
        font-size: 18px;
    }
`