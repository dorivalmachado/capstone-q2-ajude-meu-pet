import { createContext, useContext, useState } from "react";
import {api} from "../../Services/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || "";
    const user = localStorage.getItem("@ajude-meu-pet:user") || {};

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const history = useHistory();

  const signup = (userData) => {
    api
      .post("/register/", userData)
      .then((_) => {
        toast.success("Cadastro realizado");
        history.push("/login");
      })
      .catch((_) => {
        toast.error("Usuário existente");
      });
  };

  const login = (userData) => {
    api
      .post("/login/", userData)
      .then((response) => {
        console.log('response.data:', response.data);
        const { accessToken } = response.data;
        const { user } = response.data;
        console.log('user state from response.data:', user);
        localStorage.setItem("@ajude-meu-pet:token", accessToken);
        localStorage.setItem("@ajude-meu-pet:user", JSON.stringify(user));
        setData(user);
        history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Usuário ou senha inválidos!");
      });
  };

  const updateUser = (userData) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || "";
    api
      .patch(`/users/${data.user.id}/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Usuário atualizado");
        localStorage.setItem("@ajude-meu-pet:user", JSON.stringify(response.data));
      })
      .catch((_) => {
        toast.error("Nome de usuário já existente");
      });
  };
  const logout = () => {
    localStorage.removeItem("@ajude-meu-pet:token");
    localStorage.removeItem("@ajude-meu-pet:user");
    setData({});
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
