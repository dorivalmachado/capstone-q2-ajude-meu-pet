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
  CepContainer, 
  ContainerBottom, 
  ContainerTaxi, 
  CssTextField,
  DepartureAddress, 
  DepartureAddressButtons, 
  DepartureAddressForm, 
  Form, 
} from "./styles";
import {cepApi} from "../../Services/api"
import RadioButtonPets from "../RadioButtonPets";
import Button from "../Button";
import PriceTableTaxi from "../PriceTableTaxi";
import Input from "../Input";
import {useAuth} from "../../Providers/Auth"


const ModalTaxi = ({ open, handleClose }) => {

  const [buttonsVisibility, setButtonsVisibility] = useState(true);
  const [arrivalCep, setArrivalCep] = useState("");
  const [arrivalCityName, setArrivalCityName] = useState("");
  const [arrivalStreetName, setArrivalStreetName] = useState("");
  const [departureCep, setDepartureCep] = useState("");
  const [departureCityName, setDepartureCityName] = useState("");
  const [departureStreetName, setDepartureStreetName] = useState("");
  const [departureNumberValue, setDepartureNumberValue] = useState("");
  const [departureComplementValue, setDepartureComplementValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState('');

  // const {user} = useAuth();
  const user = {
    street: "Rua dos bobos",
    addressNumber: "0",
    addressComplement: "",
    city: "Lugar Nenhum"
  }

  
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
    arrivalStreet: yup.string().required("Informe a rua"),
    arrivalNumber: yup.string().required("Informe o número"),
    arrivalComplement: yup.string(),
    arrivalCity: yup.string().required("Informe a cidade"),
    departureStreet: yup.string().required("Informe a rua"),
    departureNumber: yup.string().required("Informe o número"),
    departureComplement: yup.string(),
    departureCity: yup.string().required("Informe a cidade"),
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
    console.log(data);
    closeModal();
  }

  const closeModal = () => {
    handleClose();
    reset();
    setDepartureCityName('');
    setDepartureNumberValue('');
    setDepartureStreetName('');
    setDepartureComplementValue('');
    setArrivalStreetName('');
    setArrivalCityName('');
    setButtonsVisibility(true);
  }
  

  useEffect(() => {
    const formattedCep = arrivalCep.split('').filter(elem => !isNaN(Number(elem))).join('');
    if(formattedCep.length >= 8){
      cepApi.get(`${formattedCep}/json/`)
        .then(res => {
          setArrivalStreetName(res.data.logradouro);
          setArrivalCityName(res.data.localidade);
          if(res.data.erro){
            setArrivalStreetName('');
            setArrivalCityName('');
            toast.error("CEP inválido");
          }
        })
        .catch(err => {
          setArrivalStreetName('');
          setArrivalCityName('');
          toast.error("CEP inválido");
        });

    }
  }, [arrivalCep]);

  useEffect(() => {
    const formattedCep = departureCep.split('').filter(elem => !isNaN(Number(elem))).join('');
    if(formattedCep.length >= 8){
      cepApi.get(`${formattedCep}/json/`)
        .then(res => {
          setDepartureStreetName(res.data.logradouro)
          setDepartureCityName(res.data.localidade)
          if(res.data.erro){
            setDepartureStreetName('');
            setDepartureCityName('');
            toast.error("CEP inválido");
          }
        })
        .catch(err => {
          setDepartureStreetName('');
          setDepartureCityName('');
          toast.error("CEP inválido");
        });

    }
  }, [departureCep]);

  const useMyAddress = () => {
    setDepartureCityName(user.city);
    setDepartureNumberValue(user.addressNumber);
    setDepartureStreetName(user.street);
    setDepartureComplementValue(user.addressComplement);
    setButtonsVisibility(false);
  }

  return (
    <div>
      <Dialog
        open={open === 'taxi'}
        onClose={closeModal}
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
            maxWidth: "800px",
          },
        }}
      >
        <Form onSubmit={handleSubmit(handleBooking)}>

          <FaRegWindowClose size={25} color='#999999' onClick={closeModal}/>
          <DialogContent>

            <PriceTableTaxi open={openPopover} anchorEl={anchorEl} handleClose={handleClosePopover}/>
            <ContainerTaxi>
              <DepartureAddress>
                <h3>Qual o endereço de origem? </h3>
                {/* <DepartureAddressButtons isVisible={buttonsVisibility}>
                  <Button buttonColor='blue' onClick={useMyAddress}>Usar meu endereço</Button>
                  <Button buttonColor='blue' onClick={() => setButtonsVisibility(false)}>Outro endereço</Button>
                </DepartureAddressButtons> */}
                {/* <DepartureAddressForm isVisible={buttonsVisibility}> */}
                <DepartureAddressForm>
                  {/* <CepContainer>
                    <CssTextField 
                      label='CEP' 
                      onChange={(e) => setDepartureCep(e.target.value)} 
                      InputLabelProps={{
                        style: { color: "grey" },
                      }}
                    />
                  </CepContainer> */}
                  <Input label='Rua' register={register} name='departureStreet' value={departureStreetName} onChange={ (e) => setDepartureStreetName(e.target.value)}/>
                  <Input label='Número' register={register} name='departureNumber' value={departureNumberValue} onChange={ (e) => setDepartureNumberValue(e.target.value)}/>
                  <Input label='Complemento' register={register} name='departureComplement' value={departureComplementValue} onChange={ (e) => setDepartureComplementValue(e.target.value)}/>
                  <Input label='Cidade' register={register} name='departureCity' value={departureCityName} onChange={ (e) => setDepartureCityName(e.target.value)}/>
                </DepartureAddressForm>
              </DepartureAddress>
              <ArrivalAddress>
                <h3>Qual o endereço de destino? </h3>
                <div>
                  {/* <CepContainer>
                    <CssTextField 
                      label='CEP' 
                      onChange={(e) => setArrivalCep(e.target.value)} 
                      InputLabelProps={{
                        style: { color: "grey" },
                      }}
                    />
                  </CepContainer> */}
                  <Input label='Rua' register={register} name='arrivalStreet' value={arrivalStreetName} onChange={ (e) => setArrivalStreetName(e.target.value)}/>
                  <Input label='Número' register={register} name='arrivalNumber'/>
                  <Input label='Complemento' register={register} name='arrivalComplement'/>
                  <Input label='Cidade' register={register} name='arrivalCity' value={arrivalCityName} onChange={ (e) => setArrivalCityName(e.target.value)}/>
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
            <Button type='submit' buttonColor="darkBrown">
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
