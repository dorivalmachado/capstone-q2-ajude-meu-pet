import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, TextareaAutosize } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegWindowClose } from "react-icons/fa";
import catSleeping from "../../Assets/Img/catSleeping.gif";

import {
  Container,
  ArrivalAddress,
  ButtonsContainer,
  ContainerBottom,
  ContainerTaxi,
  DepartureAddress,
  DepartureAddressForm,
  ErrorMessage,
  Form,
} from "./styles";
import RadioButtonPets from "../RadioButtonPets";
import Button from "../Button";
import PriceTableTaxi from "../PriceTableTaxi";
import Input from "../Input";
import { usePets } from "../../Providers/Pets";
import { useServices } from "../../Providers/Services";
import { useAuth } from "../../Providers/Auth";
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

interface ModalTaxiProps {
  open: string;
  handleClose: () => void;
}

const ModalTaxi = ({ open, handleClose }: ModalTaxiProps) => {
  const [arrivalCityName, setArrivalCityName] = useState("");
  const [arrivalStreetName, setArrivalStreetName] = useState("");
  const [departureCityName, setDepartureCityName] = useState("");
  const [departureStreetName, setDepartureStreetName] = useState("");
  const [departureNumberValue, setDepartureNumberValue] = useState("");
  const [departureComplementValue, setDepartureComplementValue] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openPopover, setOpenPopover] = useState("");
  const [myPets, setMyPets] = useState<Pets[]>([] as Pets[]);

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover("taxiPrice");
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopover("");
  };

  const { pets } = usePets();
  const { serviceCreate } = useServices();
  const { user } = useAuth();

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
    serviceArrivalStreet: yup.string().required("Informe a rua"),
    serviceArrivalNumber: yup.string().required("Informe o número"),
    serviceArrivalComplement: yup.string(),
    serviceArrivalCity: yup.string().required("Informe a cidade"),
    serviceDepartureStreet: yup.string().required("Informe a rua"),
    serviceDepartureNumber: yup.string().required("Informe o número"),
    serviceDepartureComplement: yup.string(),
    serviceDepartureCity: yup.string().required("Informe a cidade"),
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
      ...data,
      serviceCategory: "taxi",
      serviceDescription: "",
      serviceConclusion: false,
      workerId: null,
    };
    serviceCreate(requisitionBody);
  };

  const closeModal = () => {
    handleClose();
    reset();
    setDepartureCityName("");
    setDepartureNumberValue("");
    setDepartureStreetName("");
    setDepartureComplementValue("");
    setArrivalStreetName("");
    setArrivalCityName("");
  };


  return (
    <div>
      <Dialog
        open={open === "taxi"}
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

          <Form onSubmit={handleSubmit(handleBooking)}>
            <DialogContent>
              <PriceTableTaxi
                openPop={openPopover}
                anchor={anchorEl}
                handleClose={handleClosePopover}
              />
              <ContainerTaxi>
                <DepartureAddress>
                  <h3>Qual o endereço de origem? </h3>
                  <DepartureAddressForm>
                  <Input
                      label="Rua"
                      register={register}
                      name="serviceDepartureStreet"
                      error={!!errors.serviceDepartureStreet}
                      helperText={errors.serviceDepartureStreet?.message}
                      value={departureStreetName}
                      onChange={(e) => setDepartureStreetName(e.target.value)}
                    />
                    <Input
                      label="Número"
                      register={register}
                      name="serviceDepartureNumber"
                      error={!!errors.serviceDepartureNumber}
                      helperText={errors.serviceDepartureNumber?.message}
                      value={departureNumberValue}
                      onChange={(e) => setDepartureNumberValue(e.target.value)}
                    />
                    <Input
                      label="Complemento"
                      register={register}
                      name="serviceDepartureComplement"
                      error={!!errors.serviceDepartureComplement}
                      helperText={errors.serviceDepartureComplement?.message}
                      value={departureComplementValue}
                      onChange={(e) =>
                        setDepartureComplementValue(e.target.value)
                      }
                    />
                    <Input
                      label="Cidade"
                      register={register}
                      name="serviceDepartureCity"
                      error={!!errors.serviceDepartureCity}
                      helperText={errors.serviceDepartureCity?.message}
                      value={departureCityName}
                      onChange={(e) => setDepartureCityName(e.target.value)}
                    />
                  </DepartureAddressForm>
                </DepartureAddress>
                <ArrivalAddress>
                  <h3>Qual o endereço de destino? </h3>
                  <div>
                  <Input
                      label="Rua"
                      register={register}
                      name="serviceArrivalStreet"
                      error={!!errors.serviceArrivalStreet}
                      helperText={errors.serviceArrivalStreet?.message}
                      value={arrivalStreetName}
                      onChange={(e) => setArrivalStreetName(e.target.value)}
                    />
                    <Input
                      label="Número"
                      register={register}
                      name="serviceArrivalNumber"
                      error={!!errors.serviceArrivalNumber}
                      helperText={errors.serviceArrivalNumber?.message}
                    />
                    <Input
                      label="Complemento"
                      register={register}
                      name="serviceArrivalComplement"
                      error={!!errors.serviceArrivalComplement}
                      helperText={errors.serviceArrivalComplement?.message}
                    />
                    <Input
                      label="Cidade"
                      register={register}
                      name="serviceArrivalCity"
                      error={!!errors.serviceArrivalCity}
                      helperText={errors.serviceArrivalCity?.message}
                      value={arrivalCityName}
                      onChange={(e) => setArrivalCityName(e.target.value)}
                    />
                  </div>
                </ArrivalAddress>
              </ContainerTaxi>

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
                          myPets.map((pet) => (
                            <RadioButtonPets
                              key={pet.id}
                              name="petId"
                              register={register}
                              animalType={pet.petType}
                              value={pet.id}
                              id={(pet.id).toString()}
                              petName={pet.petName}
                            />
                          ))
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
        </Container>
      </Dialog>
    </div>
  );
};

export default ModalTaxi;
