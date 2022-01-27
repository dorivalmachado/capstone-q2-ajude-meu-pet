import { useState } from "react";
import { 
    ArrivalAddress, 
    ContainerTaxi, 
    ContainerTraining, 
    DepartureAddress, 
    TrainingDescription, 
    TrainingOptions, 
    TrainingType, 
    WalkDescription 
} from "./styles";
import Button from "../Button";



const TopModal = ({category}) => {

    const [training, setTraining] = useState('');

    return(
        <>
            {category === 'adestramento' && (
                <ContainerTraining>
                    <TrainingDescription>
                        <h3>Descrição</h3>
                        <p>
                        O adestramento básico ensina ao pet conceitos de obediência simples. Alguns exemplos são: senta, deita, fica, junto, dar a pata, entender o não, aqui e meia volta.
                        </p>
                    </TrainingDescription>
                    <TrainingType>
                        <h3 className="desktop">Selecione o tipo de adestramento</h3>
                        <h3 className="mobile">Adestramento</h3>
                        <TrainingOptions value={training} onChange={(e) => setTraining(e.target.value)}>
                            <option disabled defaultValue value=''> -- Escolha uma opção -- </option>
                            <option value='basico'>Básico</option>
                            <option value='avancado'>Avançado</option>
                            <option value='grupal'>Grupal</option>
                        </TrainingOptions>
                    </TrainingType>
                </ContainerTraining>       
            )}
            {category === 'passeio' && (
                <WalkDescription>
                    Passeios educativos com duração de 1 hora.
                </WalkDescription>
            )}
            {category === 'taxi' && (
                <ContainerTaxi>
                    <DepartureAddress>
                        <h3>Qual o endereço de origem? </h3>
                        <div>
                            <Button buttonColor='blue'>Usar meu endereço</Button>
                            <Button buttonColor='blue'>Outro endereço</Button>
                        </div>
                    </DepartureAddress>
                    <ArrivalAddress>
                        <h3>Qual o endereço de destino? </h3>
                    </ArrivalAddress>
                </ContainerTaxi>
            )}
        </>
    )
}

export default TopModal