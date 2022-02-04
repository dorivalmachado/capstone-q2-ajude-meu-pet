import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, TextareaAutosize } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import catSleeping from "../../Assets/Img/catSleeping.gif";

import {
  Container,
  Content,
  ButtonsContainer,
  ContainerBottom,
  ContainerTraining,
  ErrorMessage,
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
import Input from "../../Components/Input";
import { Link } from "react-router-dom";

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
    serviceDesiredDate: yup
      .date()
      .required("Selecione a data")
      .nullable()
      .typeError("Data obrigatória")
      .min(new Date(), "Não pode ser no passado"),
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
    let formatDate = data.serviceDesiredDate.toString();
    data.serviceDesiredDate = Intl.DateTimeFormat(["pt-br"]).format(
      new Date(formatDate.replaceAll("-", "/"))
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
        <Container>
          <button onClick={closeModal} className="closeButton">
            <FaRegWindowClose />
          </button>
          <Content>
            <Form onSubmit={handleSubmit(handleBooking)}>
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
                    <ErrorMessage>
                      {!training && errors.serviceDescription
                        ? errors.serviceDescription?.message
                        : null}
                    </ErrorMessage>
                  </TrainingType>
                </ContainerTraining>

                <ContainerBottom>
                  <div className="dateTimeContainer">
                    <div className="dateTimeContainer_box">
                      <p>Em qual dia?</p>
                      <Input
                        sx={{ width: "180px" }}
                        type="date"
                        register={register}
                        name="serviceDesiredDate"
                        error={!!errors.serviceDesiredDate}
                        helperText={errors.serviceDesiredDate?.message}
                      />
                    </div>
                    <div className="dateTimeContainer_box">
                      <p>Em qual horário?</p>
                      <Input
                        sx={{ width: "180px" }}
                        type="time"
                        register={register}
                        name="serviceDesiredTime"
                        error={!!errors.serviceDesiredTime}
                        helperText={errors.serviceDesiredTime?.message}
                      />
                    </div>
                  </div>
                  <div className="changeToRow">
                    <div className="petContainer">
                      <p>Qual o seu pet?</p>
                      <div className="petContainer_box">
                      {myPets.length !== 0 ? (
                          <>
                            {myPets.map((pet) => (
                              <RadioButtonPets
                                key={pet.id}
                                name="petId"
                                register={register}
                                animalType={pet.petType}
                                value={pet.id}
                                id={(pet.id).toString()}
                                petName={pet.petName}
                              />
                            ))}
                          </>
                        ) : (
                          <div className="noPets">
                            <img src={catSleeping} alt="cat sleeping" />
                            <div>
                              <p>Nenhum pet cadastrado!</p>
                              <Link to="/pets">Clique aqui</Link> para cadastrar
                            </div>
                          </div>
                        )}
                      </div>
                      <ErrorMessage>
                        {errors.petId?.message && "Selecione um pet"}
                      </ErrorMessage>
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
          </Content>
        </Container>
      </Dialog>
    </div>
  );
};

export default ModalTraining;
