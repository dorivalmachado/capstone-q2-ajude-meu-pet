import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, TextareaAutosize, TextField } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ButtonsContainer,
  ContainerBottom,
  ContainerTraining,
  Form,
  TrainingDescription,
  TrainingOptions,
  TrainingType,
} from "./styles";
import RadioButtonPets from "../RadioButtonPets";
import Button from "../Button";
import PriceTableTraining from "../PriceTableTraining";
import { usePets } from "../../Providers/Pets";
import { useAuth } from "../../Providers/Auth";
import { useServices } from "../../Providers/Services";

interface Pets {
  petName: string;
  petType: string;
  petGender: string;
  petSize: string;
  petBirthDate: string;
  userId: number;
  id: number;
}

interface ModalWalkProps {
  open: string;
  handleClose: () => void;
}

const ModalTraining = ({ open, handleClose }: ModalWalkProps) => {
  const trainingDescription = [
    "",
    "O adestramento básico ensina ao pet conceitos de obediência simples. Alguns exemplos são: senta, deita, fica, junto, dar a pata, entender o não, aqui e meia volta.",
    "Treinamento oferecido para cães de trabalho e para esportes. Dentro do adestramento no pet shop, há algumas atividades, como saltar e buscar objetos, por exemplo.",
    "Para os donos que veem a necessidade de seu animal ter contato com outros pets, essa é a opção ideal. Nele, são ensinados comandos de obediência que podem ser usados fora de casa, assim como adequar o comportamento em passeios e em momentos de socialização com pessoas ou outros animais.",
  ];

  const handleChange = (e: any) => {
    if (e.target.value === "basico") {
      setTraining(1);
    } else if (e.target.value === "avancado") {
      setTraining(2);
    } else {
      setTraining(3);
    }
  };

  const [training, setTraining] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openPopover, setOpenPopover] = useState("");
  const [myPets, setMyPets] = useState<Pets[]>([] as Pets[]);

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover("trainingPrice");
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopover("");
  };

  const { pets } = usePets();
  const { user } = useAuth();
  const { serviceCreate } = useServices();

  useEffect(() => {
    if (pets.length > 0) {
      setMyPets(pets.filter((pet) => pet.userId === user.id));
    }
  }, [pets]);

  const schema = yup.object().shape({
    serviceDesiredDate: yup.string().required("Selecione a data"),
    serviceDesiredTime: yup.string().required("Selecione o horário"),
    petId: yup.string().required("Selecione um pet"),
    serviceObs: yup.string(),
    serviceDescription: yup.string().required("Selecione um tipo"),
  });

  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleBooking = (data: any) => {
    closeModal();
    data.petId = Number(data.petId);
    data.serviceDesiredDate = Intl.DateTimeFormat(["pt-br"]).format(
      new Date(data.serviceDesiredDate.replaceAll("-", "/"))
    );
    const requisitionBody = {
      serviceCategory: "adestramento",

      serviceDepartureStreet: "",
      serviceDepartureNumber: "",
      serviceDepartureComplement: "",
      serviceDepartureCity: "",
      serviceArrivalStreet: "",
      serviceArrivalNumber: "",
      serviceArrivalComplement: "",
      serviceArrivalCity: "",
      serviceConclusion: false,
      workerId: null,
      ...data,
    };
    serviceCreate(requisitionBody);
  };

  const closeModal = () => {
    handleClose();
    setTraining(0);
    reset();
  };

  return (
    <div>
      <Dialog
        open={open === "training"}
        onClose={closeModal}
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
            maxWidth: "800px",
          },
        }}
      >
        <Form onSubmit={handleSubmit(handleBooking)}>
          <FaRegWindowClose size={25} color="#999999" onClick={closeModal} />
          <DialogContent>
            <PriceTableTraining
              openPop={openPopover}
              anchor={anchorEl}
              handleClose={handleClosePopover}
            />
            <ContainerTraining>
              <TrainingDescription>
                <h3>Descrição</h3>
                <p>{trainingDescription[training]}</p>
              </TrainingDescription>
              <TrainingType>
                <h3 className="desktop">Selecione o tipo de adestramento</h3>
                <h3 className="mobile">Adestramento</h3>
                <TrainingOptions
                  {...register("serviceDescription")}
                  value={training}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    -- Escolha uma opção --
                  </option>
                  <option value="basico">Básico</option>
                  <option value="avancado">Avançado</option>
                  <option value="grupal">Grupal</option>
                </TrainingOptions>
              </TrainingType>
            </ContainerTraining>

            <ContainerBottom>
              <div className="dateTimeContainer">
                <div className="dateTimeContainer_box">
                  <p>Em qual dia?</p>
                  <TextField
                    sx={{ width: "200px" }}
                    type="date"
                    {...register("serviceDesiredDate")}
                  />
                </div>
                <div className="dateTimeContainer_box">
                  <p>Em qual horário?</p>
                  <TextField
                    sx={{ width: "200px" }}
                    type="time"
                    {...register("serviceDesiredTime")}
                  />
                </div>
              </div>
              <div className="changeToRow">
                <div className="petContainer">
                  <p>Qual o seu pet?</p>
                  <div className="petContainer_box">
                    {myPets.map((pet) => (
                      <RadioButtonPets
                        key={pet.id}
                        name="petId"
                        register={register}
                        animalType={pet.petType}
                        value={pet.id}
                        id={pet.id.toString()}
                        petName={pet.petName}
                      />
                    ))}
                  </div>
                </div>
                <div className="obsContainer">
                  <p>Alguma observação?</p>
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    style={{
                      minWidth: "200px",
                      width: "100%",
                      height: "180px",
                      backgroundColor: "var(--cream)",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                    {...register("serviceObs")}
                  />
                </div>
              </div>
            </ContainerBottom>
          </DialogContent>

          <ButtonsContainer>
            <Button type="submit" buttonColor="darkBrown">
              Agendar!
            </Button>
            <Button buttonColor="blue " onClick={handleOpenPopover}>
              Tabela de preços
            </Button>
          </ButtonsContainer>
        </Form>
      </Dialog>
    </div>
  );
};

export default ModalTraining;
