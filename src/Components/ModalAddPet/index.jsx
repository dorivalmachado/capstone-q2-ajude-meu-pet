import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegWindowClose } from "react-icons/fa";
import { Dialog, DialogContent } from "@mui/material";
import Button from "../Button";
import Input from "../Input";
import RadioInput from "../RadioInput";


const ModalAddPet = ({open, handleClose}) => {

    const schema = yup.object().shape({});

    const {
        formState: { errors },
        reset,
        handleSubmit,
        register,
      } = useForm({
        resolver: yupResolver(schema),
      }); 

    const closeModal = () => {
        handleClose();
        reset();
    };

    console.log(open === 'add')

    return(
        <Dialog
            open={open === 'add'}
            onClose={closeModal}
            sx={{
            "& .MuiDialog-paper": {
                width: "800px",
                maxWidth: "800px",
            },
            }}
        >
            <form>
                <FaRegWindowClose size={25} color='#999999' onClick={closeModal}/>
                <DialogContent>
                    <h2>Adicione seu pet</h2>
                    
                    <Input label='Nome' name='petName' register={register}/>
                    
                    <h3>Tipo</h3>
                    <RadioInput label='Cachorro' name='petType' register={register} id='cachorro'/>
                    <RadioInput label='Gato' name='petType' register={register} id='gato'/>
                    <RadioInput label='Outro' name='petType' register={() => {}} id='cachorro'/>
                    <Input label='Outro' name='petType' register={register}/>

                    <h3>Gênero</h3>
                    <RadioInput label='Feminino' name='petGender' register={register} id='female'/>
                    <RadioInput label='Masculino' name='petGender' register={register} id='male'/>
                    
                    <h3>Tamanho</h3>
                    <RadioInput label='Pequeno' name='petSize' register={register} id='pequeno'/>
                    <RadioInput label='Médio' name='petSize' register={register} id='médio'/>
                    <RadioInput label='Grande' name='petSize' register={register} id='grande'/>
                    
                    <Input type='date' name='petBirthDate' register={register} />

                    <Button buttonColor='blue' type='submit'>Salvar as alterações</Button>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default ModalAddPet