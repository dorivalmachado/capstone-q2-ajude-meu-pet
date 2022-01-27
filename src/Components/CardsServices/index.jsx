import { Card, CardBack, CardFront, CardInner, Container } from "./styles"


const CardsServices = () => {
    return(
        <Container>
            <Card>
                <div className="inner">
                    <CardFront>
                        <h2>Adestramento</h2>
                    </CardFront>
                    <CardBack>
                        <p>
                            Seu pet com a melhor educação,sabendo truques e comandos!
                        </p>

                        <p>
                            Nossos adestradores certificados irão educar e ensinar comandos e brincadeiras para o seu pet aprender enquanto se diverte.
                        </p>
                    </CardBack>
                </div>
            </Card>
            <Card>
                <div className="inner">
                    <CardFront>
                        <h2>Adestramento</h2>
                    </CardFront>
                    <CardBack>
                        <p>
                            Seu pet com a melhor educação,sabendo truques e comandos!
                        </p>

                        <p>
                            Nossos adestradores certificados irão educar e ensinar comandos e brincadeiras para o seu pet aprender enquanto se diverte.
                        </p>
                    </CardBack>
                </div>
            </Card>
            <Card>
                <div className="inner">
                    <CardFront>
                        <h2>Adestramento</h2>
                    </CardFront>
                    <CardBack>
                        <p>
                            Seu pet com a melhor educação,sabendo truques e comandos!
                        </p>

                        <p>
                            Nossos adestradores certificados irão educar e ensinar comandos e brincadeiras para o seu pet aprender enquanto se diverte.
                        </p>
                    </CardBack>
                </div>
            </Card>
        </Container>
    )
}

export default CardsServices





