import { useState } from "react";

import { 
    ButtonBox, 
    ButtonStyled, 
    ButtonYellow, 
    Card, 
    CardBack, 
    CardFront, 
    Container 
} from "./styles"
import PriceTableTraining from "../PriceTableTraining";
import PriceTableWalk from "../PriceTableWalk";
import PriceTableTaxi from "../PriceTableTaxi";

const CardsServices = () => {

    const [openTraining, setOpenTraining] = useState(false);
    const handleOpenTraining = () => setOpenTraining(true);
    const handleCloseTraining = () => setOpenTraining(false);

    const [openWalk, setOpenWalk] = useState(false);
    const handleOpenWalk = () => setOpenWalk(true);
    const handleCloseWalk = () => setOpenWalk(false);

    const [openTaxi, setOpenTaxi] = useState(false);
    const handleOpenTaxi = () => setOpenTaxi(true);
    const handleCloseTaxi = () => setOpenTaxi(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openPopover, setOpenPopover] = useState('');

    const handleOpenPopover = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPopover(event.target.id);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
        setOpenPopover('');
    };

    // console.log('training' === openPopover);
    
    return(
        <>
            <PriceTableTraining open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
            <PriceTableWalk open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
            <PriceTableTaxi open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
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
                                <ButtonBox>
                                    <ButtonStyled id='training' onClick={handleOpenPopover}>Tabela de preços</ButtonStyled>
                                    <ButtonYellow onClick={handleOpenTraining}>Solicitar</ButtonYellow>
                                </ButtonBox>
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
                                <ButtonBox>
                                    <ButtonStyled id='walk' onClick={handleOpenPopover}>Tabela de preços</ButtonStyled>
                                    <ButtonYellow onClick={handleOpenWalk} >Solicitar</ButtonYellow>
                                </ButtonBox>
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
                                <ButtonBox>
                                    <ButtonStyled id='taxi' onClick={handleOpenPopover}>Tabela de preços</ButtonStyled>
                                    <ButtonYellow onClick={handleOpenTaxi} >Solicitar</ButtonYellow>
                                </ButtonBox>
                            </CardBack>
                        </div>
                    </Card>
                </div>
            </Container>
        </>
        
    )
}

export default CardsServices





