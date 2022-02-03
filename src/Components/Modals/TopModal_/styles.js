import styled from "styled-components";

export const ContainerTraining = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    max-width: 910px;

    .desktop{
        display: none;
    }

    h3{
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    p{
        font-size: 18px;
    }

    @media screen and (min-width: 768px){
        flex-direction: row-reverse;
        .mobile{
            display: none;
        }

        .desktop{
            display: block;
        }
    }
`

export const TrainingDescription = styled.div`
    width: 100%;
    max-width: 535px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px){
        margin-bottom: 0;
    }
`


export const TrainingType = styled.div`
    width: 100%;
    max-width: 375px;
`

export const TrainingOptions = styled.select`
    width: 250px;
    height: 35px;
    font-size: 16px;

    :focus{
        outline-color: var(--blue);
    }

    option{
        background-color: var(--blue);
        color: white;
    }
`

export const WalkDescription = styled.h3`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
`

export const ContainerTaxi = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    max-width: 910px;

    h3{
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px){
        flex-direction: row;
    }
`

export const DepartureAddress = styled.div`
    width: 100%;
    max-width: 375px;
    margin-bottom: 20px;

    div{
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and (min-width: 768px){
        margin-bottom: 0;
    }
`

export const ArrivalAddress = styled.div`
    width: 100%;
    max-width: 535px;
    
`