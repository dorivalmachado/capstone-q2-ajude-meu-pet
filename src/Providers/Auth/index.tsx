import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../Services/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";


interface AuthProviderProps {
  children: ReactNode,
}

interface UserData {
  accessToken: string,
  user: User,
}

interface Data {
  token: string,
  user: User,
}

interface User{
  email: string,
  name: string,
  phone: string,
  address: string,
  isClient: boolean,
  id: number
}

interface UserRegister{
  email: string,
  name: string,
  phone: string,
  password: string
}

interface UserLogin{
  email: string,
  password: string
}

interface UserUpdate{
  email?: string,
  password?: string,
  name?: string,
  phone?: string,
  address?: string,
  isClient?: boolean
}

interface UpdateRes {
  email: string,
  name: string,
  phone: string,
  address: string,
  password: string,
  isClient: boolean,
  id: number
}

interface AuthData{
  signup: (userData: UserRegister) => void,
  login: (userData: UserLogin) => void,
  updateUser: (userData: UserUpdate) =>void,
  logout: () => void,
  user: User,
  token: string,
}


export const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<Data>(() => {
    const token = localStorage.getItem("@ajude-meu-pet:token");
    const user = localStorage.getItem("@ajude-meu-pet:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as Data;
  });

  const history = useHistory();

  const signup = (userData: UserRegister) => {
    api
      .post<UserData>("/register/", userData)
      .then((_) => {
        toast.success("Cadastro realizado");
        history.push("/login");
      })
      .catch((_) => {
        toast.error("Usuário existente");
      });
  };

  const login = (userData: UserLogin) => {
    api
      .post<UserData>("/login/", userData)
      .then((response) => {
        const { accessToken } = response.data;
        const { user } = response.data;
        localStorage.setItem("@ajude-meu-pet:token", accessToken);
        localStorage.setItem("@ajude-meu-pet:user", JSON.stringify(user));
        setData({ token: accessToken, user });
        history.push("/services");
      })
      .catch((_) => {
        toast.error("Usuário ou senha inválidos!");
      });
  };

  const updateUser = (userData: UserUpdate) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || "";
    api
      .patch<UpdateRes>(`/users/${data.user.id}/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Usuário atualizado");
        localStorage.setItem(
          "@ajude-meu-pet:user",
          JSON.stringify(response.data)
        );
      })
      .catch((_) => {
        toast.error("Nome de usuário já existente");
      });
  };
  const logout = () => {
    localStorage.removeItem("@ajude-meu-pet:token");
    localStorage.removeItem("@ajude-meu-pet:user");
    setData({} as Data);
    toast("Até a próxima!", {
      icon: "👋",
    });
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        updateUser,
        logout,
        user: data.user,
        token: data.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
