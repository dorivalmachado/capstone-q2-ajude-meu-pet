import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, TextareaAutosize, TextField } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import catSleeping from "../../../Assets/Img/catSleeping.gif";

import {
  ButtonsContainer,
  ContainerBottom,
  ErrorMessage,
  Form,
  WalkDescription,
} from "./styles";
import RadioButtonPets from "../../RadioButtonPets";
import Button from "../../Button";
import PriceTableWalk from "../../PriceTableWalk";
import { usePets } from "../../../Providers/Pets";
import { useAuth } from "../../../Providers/Auth";
import { useServices } from "../../../Providers/Services";
import { Link } from "react-router-dom";
import Input from "../../Input";

const ModalWalk = ({ open, handleClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState("");
  const [myPets, setMyPets] = useState([]);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover("walkPrice");
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
  });

  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleBooking = (data) => {
    closeModal();
    data.petId = Number(data.petId);
    data.serviceDesiredDate = Intl.DateTimeFormat(["pt-br"]).format(
      new Date(data.serviceDesiredDate.replaceAll("-", "/"))
    );
    const requisitionBody = {
      serviceCategory: "passeio",
      serviceDescription: "1 hora de passeio",
      serviceDepartureStreet: user.street,
      serviceDepartureNumber: user.addressNumber,
      serviceDepartureComplement: user.addressComplement,
      serviceDepartureCity: user.city,
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
    reset();
  };

  return (
    <div>
      <Dialog
        open={open === "walk"}
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
            <PriceTableWalk
              open={openPopover}
              anchorEl={anchorEl}
              handleClose={handleClosePopover}
            />
            <WalkDescription>
              Passeios educativos com duração de 1 hora.
            </WalkDescription>

            <ContainerBottom>
              <div className="dateTimeContainer">
                <div className="dateTimeContainer_box">
                  <p>Em qual dia?</p>
                  <Input
                    sx={{ width: "180px" }}
                    type="date"
                    register={register}
                    name='serviceDesiredDate'
                    error={!!errors.serviceDesiredDate}
                    helperText={errors.serviceDesiredDate?.message}
                  />
                </div>
                <div className="dateTimeContainer_box">
                  <p>Em qual horário?</p>
                  <Input
                    sx={{ width: "180px" }}
                    type="time"
                    {...register("serviceDesiredTime")}
                    register={register}
                    name='serviceDesiredTime'
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
                          id={pet.id}
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
                  <ErrorMessage>{errors.petId?.message  && 'Selecione um pet'}</ErrorMessage>
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

export default ModalWalk;
