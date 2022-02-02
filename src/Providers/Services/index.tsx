import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../../Services/api";
import toast from "react-hot-toast";
import { useAuth } from "../Auth/index.tsx";

interface ServicesProviderProps {
  children: ReactNode,
}

interface Services {
  serviceCategory: string,
  serviceDepartureStreet: string,
  serviceDepartureNumber: string,
  serviceDepartureComplement: string,
  serviceDepartureCity: string,
  serviceArrivalStreet: string,
  serviceArrivalNumber: string,
  serviceArrivalComplement: string,
  serviceArrivalCity: string,
  serviceConclusion: boolean,
  workerId: null | number,
  serviceDescription: string,
  serviceDesiredDate: string,
  serviceDesiredTime: string,
  serviceObs: string,
  petId: number,
  clientId: number,
  id: number
}

interface ServicesReq {
  serviceCategory?: string,
  serviceDepartureStreet?: string,
  serviceDepartureNumber?: string,
  serviceDepartureComplement?: string,
  serviceDepartureCity?: string,
  serviceArrivalStreet?: string,
  serviceArrivalNumber?: string,
  serviceArrivalComplement?: string,
  serviceArrivalCity?: string,
  serviceConclusion?: boolean,
  workerId?: null | number,
  serviceDescription?: string,
  serviceDesiredDate?: string,
  serviceDesiredTime?: string,
  serviceObs?: string,
  petId?: number,
  clientId?: number
}

interface ServicesData {
  serviceCreate: (obj: ServicesReq) => void, 
  serviceUpdate: (obj: ServicesReq, serviceId: number) => void, 
  serviceDelete: (serviceId: number) => void, 
  services: Services[]
}

export const ServicesContext = createContext<ServicesData>({} as ServicesData);

export const ServicesProvider = ({ children }: ServicesProviderProps) => {
  const { token, user } = useAuth();
  const [services, setServices] = useState<Services[]>([]);

  const getServices = () => {
    token !== undefined &&
      api
        .get<Services[]>(`/services`, {
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

  const serviceCreate = (obj: ServicesReq) => {
    api
      .post<Services>(
        "/services/",
        { ...obj, clientId: user.id },
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
  const serviceUpdate = (obj: ServicesReq, serviceId: number) => {
    api
      .patch<Services>(`/services/${serviceId}/`, obj, {
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
  const serviceDelete = (serviceId: number) => {
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
