import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  DialogContent,
  TextareaAutosize,
  TextField
} from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegWindowClose } from "react-icons/fa";
import toast from "react-hot-toast";

import { 
  ArrivalAddress,
  ButtonsContainer, 
  ContainerBottom, 
  ContainerTaxi, 
  DepartureAddress, 
  Form, 
} from "./styles";
import {cepApi} from "../../Services/api"
import RadioButtonPets from "../RadioButtonPets";
import Button from "../Button";
import PriceTableTaxi from "../PriceTableTaxi";
import Input from "../Input";


const ModalTaxi = ({ open, handleClose }) => {

  // const [date, setDate] = useState("");
  const [arrivalCep, setArrivalCep] = useState("");
  const [arrivalStreet, setArrivalStreet] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState('');
  
  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover('taxiPrice');
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopover('');
  };

  const pet = [
    { petName: "Tobias", animalType: "dog", id: 1 },
    { petName: "Shailow", animalType: "cat", id: 2 },
    { petName: "Dogo", animalType: "other", id: 3 },
  ];

  const schema = yup.object().shape({
    date: yup.string().required("Selecione a data"),
    time: yup.string().required("Selecione o horário"),
    pet: yup.string().required("Selecione um pet"),
    obs: yup.string(),
    arrivalAddress: yup.string().required("Informe a rua"),
    arrivalNumber: yup.string().required("Informe o número"),
    arrivalComplement: yup.string(),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });  

  const handleBooking = (data) => {
    console.log(data)
  }

  // const handleArrivalAddress = () => {
  //   const formattedCep = arrivalCep.split('').filter(elem => !isNaN(Number(elem))).join('');
  //   cepApi.get(`${formattedCep}/json/`)
  //     .then(res => setArrivalStreet(res.data.logradouro))
  //     .catch(err => {
  //       setArrivalStreet('');
  //       toast.error("CEP inválido");
  //     });
  // }

  useEffect(() => {
    const formattedCep = arrivalCep.split('').filter(elem => !isNaN(Number(elem))).join('');
    if(formattedCep.length >= 8){
      cepApi.get(`${formattedCep}/json/`)
        .then(res => {
          setArrivalStreet(res.data.logradouro)
          if(res.data.erro){
            setArrivalStreet('');
            toast.error("CEP inválido");
          }
        })
        .catch(err => {
          setArrivalStreet('');
          toast.error("CEP inválido");
        });

    }
  }, [arrivalCep])

  return (
    <div>
      <Dialog
        open={open === 'taxi'}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
            maxWidth: "800px",
          },
        }}
      >
        <Form onSubmit={handleSubmit(handleBooking)}>

          <FaRegWindowClose size={25} color='#999999' onClick={handleClose}/>
          <DialogContent>

            <PriceTableTaxi open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
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
                <div>
                  <TextField label='CEP' onChange={(e) => setArrivalCep(e.target.value)} />
                  <Input label='Rua' register={register} name='arrivalAddress' value={arrivalStreet}/>
                  <Input label='Número' register={register} name='arrivalNumber'/>
                  <Input label='Complemento' register={register} name='arrivalComplement'/>
                  {/* <Button buttonColor='blue' onClick={handleArrivalAddress}>Buscar</Button> */}
                </div>
              </ArrivalAddress>
            </ContainerTaxi>

            <ContainerBottom>
              <div className="dateTimeContainer">
                <div className="dateTimeContainer_box">
                  <p>Em qual dia?</p>
                  <TextField sx={{width: '200px'}} type="date"  {...register('date')}/>
                </div>
                <div className="dateTimeContainer_box">
                  <p>Em qual horário?</p>
                  <TextField sx={{width: '200px'}} type="time"  {...register('time')}/>
                </div>
              </div>
              <div className="changeToRow">
                <div className="petContainer">
                  <p>Qual o seu pet?</p>
                  <div className="petContainer_box">
                    {pet.map((e, i) => (
                      <RadioButtonPets
                        key={i}
                        name="pet"
                        register={register}
                        animalType={e.animalType}
                        value={e.id}
                        id={e.id}
                        petName={e.petName}
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
                    {...register('obs')}
                  />
                </div>
              </div>
            </ContainerBottom>

          </DialogContent>
          <ButtonsContainer>
            <Button type='submit' buttonColor="darkBrown" onClick={() => {}}>
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

export default ModalTaxi;
