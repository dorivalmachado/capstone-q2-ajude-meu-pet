import { createContext, useContext, useState, useEffect } from "react";
import api from "../../Services/api";
import toast from 'react-hot-toast';
import { useAuth } from "../auth";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const { token } = useAuth();
  const [pets, setPets] = useState([]);

  const getPets = () => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    token !== '' &&
      api.get('/pets/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setPets(response.data);
        })
        .catch(_ => {
          setPets([]);
        })
  }

  useEffect(() => {
    getPets();
  }, [token])

  const petCreate = (obj) => {
    const { id } = JSON.parse(localStorage.getItem("@ajude-meu-pet:user")) || {};
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    api.post('/pets/', { ...obj, "user": id }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => {
        getPets();
        toast.success('Pet registrado!');
      })
      .catch(_ => {
        toast.error('Erro ao registrar o pet!')
      })
  }
  const petUpdate = (obj, petId) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    api.patch(`/pets/${petId}/`, obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        getPets();
        toast.success('Pet atualizado!');
      })
      .catch(_ => {
        toast.error('Erro ao atualizar o pet!')
      })
  }
  const petDelete = (petId) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    api.delete(`/pets/${petId}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => {
        getPets();
        toast.success('Pet excluído!');
      })
      .catch(_ => {
        toast.error('Erro ao excluir o pet!')
      })
  }

  return (
    <PetsContext.Provider value={{ petCreate, petUpdate, petDelete, pets }}>
      {children}
    </PetsContext.Provider>
  )
}

export const usePets = () => useContext(PetsContext);