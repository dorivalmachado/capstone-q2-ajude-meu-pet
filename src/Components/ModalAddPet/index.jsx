import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegWindowClose } from "react-icons/fa";
import { Dialog, DialogContent } from "@mui/material";
import Button from "../Button";
import Input from "../Input";
import RadioInput from "../RadioInput";
import { Form } from "./styles";
import { useState } from "react";
import { usePets } from "../../Providers/Pets";


const ModalAddPet = ({open, handleClose}) => {

    const [showOtherType, setShowOtherType] = useState(false);

    const {petCreate} = usePets();
    
    const schema = yup.object().shape({
        petName: yup.string().required('Informe o nome'),
        petType: yup.string().required('Informe o tipo'),
        petGender: yup.string().required('Informe o gênero'),
        petSize: yup.string().required('Informe o tamanho'),
        petBirthDate: yup.string().required('Informe a data de nascimento')
    });

    const {
        formState: { errors },
        reset,
        handleSubmit,
        register,
    } = useForm({
        resolver: yupResolver(schema),
    }); 

    const closeModal = () => {
        setShowOtherType(false);
        handleClose();
        reset();
    };

    const handleAddition = (data) => {
        closeModal();
        data.petBirthDate = Intl.DateTimeFormat(["pt-br"]).format(new Date(data.petBirthDate.replaceAll('-','/')));
        petCreate(data);
    }


    return(
        <Dialog
            open={open === 'add'}
            onClose={closeModal}
            sx={{
            "& .MuiDialog-paper": {
                width: "450px",
                maxWidth: "450px",
            },
            }}
        >
            <DialogContent>
                <Form onSubmit={handleSubmit(handleAddition)}>
                    <FaRegWindowClose size={25} color='#999999' onClick={closeModal}/>
                    <h2>Adicione seu pet</h2>
                    
                    <Input label='Nome' name='petName' register={register}/>
                    
                    <h3>Tipo</h3>
                    <div>
                        <RadioInput label='Cachorro' value='cachorro' name='petType' register={register} id='cachorro'/>
                        <RadioInput label='Gato' value='gato' name='petType' register={register} id='gato'/>
                        <RadioInput label='Outro' value='outro' name='petType' register={() => {}} id='outro' onClick={() => setShowOtherType(true)}/>
                    </div>
                    {showOtherType && <Input label='Outro' name='petType' register={register}/>}

                    <h3>Gênero</h3>
                    <div>
                        <RadioInput label='Feminino' value='female' name='petGender' register={register} id='female'/>
                        <RadioInput label='Masculino' value='male' name='petGender' register={register} id='male'/>
                    </div>
                    
                    <h3>Tamanho</h3>
                    <div>
                        <RadioInput label='Pequeno' value='pequeno' name='petSize' register={register} id='pequeno'/>
                        <RadioInput label='Médio' value='médio' name='petSize' register={register} id='médio'/>
                        <RadioInput label='Grande' value='grande' name='petSize' register={register} id='grande'/>
                    </div>
                    
                    <h3>Data de nascimento</h3>
                    <Input type='date' name='petBirthDate' register={register} />

                    <Button buttonColor='blue' type='submit'>Salvar as alterações</Button>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default ModalAddPet