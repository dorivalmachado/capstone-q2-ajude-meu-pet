import { createContext, useContext, useState, useEffect } from "react";
import api from "../../Services/api";
import toast from "react-hot-toast";
import { useAuth } from "../Auth";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [services, setServices] = useState([]);

  const getServices = () => {
    token !== "" &&
      api
        .get("/services/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setServices(response.data);
        })
        .catch((_) => {
          setServices([]);
        });
  };

  useEffect(() => {
    getServices();
  }, [token]);

  const serviceCreate = (obj) => {
    api
      .post(
        "/services/",
        { ...obj, userId: user.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        getServices();
        toast.success("Serviço registrado!");
      })
      .catch((_) => {
        toast.error("Erro ao registrar o serviço!");
      });
  };
  const serviceUpdate = (obj, serviceId) => {
    api
      .patch(`/services/${serviceId}/`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getServices();
        toast.success("Serviço atualizado!");
      })
      .catch((_) => {
        toast.error("Erro ao atualizar o serviço!");
      });
  };
  const serviceDelete = (serviceId) => {
    api
      .delete(`/services/${serviceId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getServices();
        toast.success("Serviço excluído!");
      })
      .catch((_) => {
        toast.error("Erro ao excluir o serviço!");
      });
  };

  return (
    <ServicesContext.Provider
      value={{ serviceCreate, serviceUpdate, serviceDelete, services }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
