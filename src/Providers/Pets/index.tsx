import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../../Services/api";
import toast from "react-hot-toast";
import { useAuth } from "../Auth/index.tsx";

interface PetsProviderProps {
  children: ReactNode,
}

interface Pets {
  petName: string,
  petType: string,
  petGender: string,
  petSize: string,
  petBirthDate: string,
  userId: number,
  id: number
}

interface PetsReq {
  petName?: string,
  petType?: string,
  petGender?: string,
  petSize?: string,
  petBirthDate?: string,
  userId?: number,
}

interface PetsData{
  petCreate: (obj: PetsReq) => void, 
  petUpdate: (obj: PetsReq, petId: number) => void, 
  petDelete: (petId: number) => void, 
  pets: Pets[]
}


export const PetsContext = createContext<PetsData>({} as PetsData);

export const PetsProvider = ({ children }: PetsProviderProps) => {
  const { token, user } = useAuth();
  const [pets, setPets] = useState<Pets[]>([]);

  const getPets = () => {
    token !== undefined &&
      api
        .get<Pets[]>(`/pets`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPets(response.data);
        })
        .catch((_) => {
          toast.error("Erro na busca dos pets!");
        });
  };

  useEffect(() => {
    getPets();
  }, [token]);

  const petCreate = (obj: PetsReq) => {
    api
      .post<Pets>(
        "/pets/",
        { ...obj, userId: user.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        getPets();
        toast.success("Pet registrado!");
      })
      .catch((_) => {
        toast.error("Erro ao registrar o pet!");
      });
  };
  const petUpdate = (obj: PetsReq, petId: number) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || "";
    api
      .patch<Pets>(`/pets/${petId}/`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getPets();
        toast.success("Pet atualizado!");
      })
      .catch((_) => {
        toast.error("Erro ao atualizar o pet!");
      });
  };
  const petDelete = (petId: number) => {
    api
      .delete(`/pets/${petId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getPets();
        toast.success("Pet excluído!");
      })
      .catch((_) => {
        toast.error("Erro ao excluir o pet!");
      });
  };

  return (
    <PetsContext.Provider value={{ petCreate, petUpdate, petDelete, pets }}>
      {children}
    </PetsContext.Provider>
  );
};

export const usePets = () => useContext(PetsContext);
