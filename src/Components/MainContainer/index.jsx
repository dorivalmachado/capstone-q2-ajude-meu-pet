import { Container, ContentBox } from "./styles"


const MainContainer = ({children, containerHeight='auto', containerBgColor='white', contentMaxW='1170px'}) => {
    return(
        <Container containerHeight={containerHeight} containerBgColor={containerBgColor}>
            <ContentBox contentMaxW={contentMaxW}>
                {children}
            </ContentBox>
        </Container>
    )
}


export default MainContainer