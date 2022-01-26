import { createContext, useContext, useState, useEffect } from "react";
import api from "../../Services/api";
import toast from 'react-hot-toast';
import { useAuth } from "../auth";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { token } = useAuth();
  const [services, setServices] = useState([]);

  const getServices = () => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    token !== '' &&
      api.get('/services/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setServices(response.data);
        })
        .catch(_ => {
          setServices([]);
        })
  }

  useEffect(() => {
    getServices();
  }, [token])

  const serviceCreate = (obj) => {
    const { id } = JSON.parse(localStorage.getItem("@ajude-meu-pet:user")) || {};
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    api.post('/services/', { ...obj, "user": id }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => {
        getServices();
        toast.success('Serviço registrado!');
      })
      .catch(_ => {
        toast.error('Erro ao registrar o serviço!')
      })
  }
  const serviceUpdate = (obj, serviceId) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    api.patch(`/services/${serviceId}/`, obj, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => {
        getServices();
        toast.success('Serviço atualizado!');
      })
      .catch(_ => {
        toast.error('Erro ao atualizar o serviço!')
      })
  }
  const serviceDelete = (serviceId) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || '';
    api.delete(`/services/${serviceId}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(_ => {
        getServices();
        toast.success('Serviço excluído!');
      })
      .catch(_ => {
        toast.error('Erro ao excluir o serviço!')
      })
  }

  return (
    <ServicesContext.Provider value={{ serviceCreate, serviceUpdate, serviceDelete, services }}>
      {children}
    </ServicesContext.Provider>
  )
}

export const useServices = () => useContext(ServicesContext);