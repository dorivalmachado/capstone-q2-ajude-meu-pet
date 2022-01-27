import { Card, CardBack, CardFront, CardInner, Container } from "./styles"


const CardsServices = () => {
    return(
        <Container>
            <div>
                <Card>
                    <div className="inner">
                        <CardFront>
                            <h2>Adestramento</h2>
                        </CardFront>
                        <CardBack>
                            <div>
                                <p>
                                    Seu pet com a melhor educação,sabendo truques e comandos!
                                </p>

                                <p>
                                    Nossos adestradores certificados irão educar e ensinar comandos e brincadeiras para o seu pet aprender enquanto se diverte.
                                </p>
                            </div>
                            
                        </CardBack>
                    </div>
                </Card>
                <Card>
                    <div className="inner">
                        <CardFront>
                            <h2>Passeio</h2>
                        </CardFront>
                        <CardBack>
                            <div>
                                <p>
                                    Sem tempo para passear?
                                </p>

                                <p>
                                    Gaste a energia de seu cachorro com um passeio educativo e saudável, feito por um dos profissionais parceiros.
                                </p>
                            </div>
                            
                        </CardBack>
                    </div>
                </Card>
                <Card>
                    <div className="inner">
                        <CardFront>
                            <h2>Taxi-Pet</h2>
                        </CardFront>
                        <CardBack>
                            <div>
                                <p>
                                    Precisando de alguém para levar seu bichinho para algum compromisso? 
                                </p>

                                <p>
                                    Pode conta com a gente!
                                </p>
                            </div>
                            
                        </CardBack>
                    </div>
                </Card>
            </div>
        </Container>
    )
}

export default CardsServices





