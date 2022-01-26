import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || "";
    const user = localStorage.getItem("@ajude-meu-pet:user") || {};

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const register = (userData, history, reset) => {
    api
      .post("/register/", userData)
      .then(_ => {
        toast.success("Cadastro realizado");
        reset();
        history.push("/login");
      })
      .catch(_ => {
        toast.error("Usuário existente");
      });
  };

  const login = (userData, history) => {
    api
      .post("/login/", userData)
      .then((response) => {
        setUserId(jwt_decode(response.data.access).user_id);
        const { access } = response.data;
        localStorage.setItem("@ajude-meu-pet:token", access);
        api
          .get(`/users/${jwt_decode(response.data.access).user_id}/`)
          .then((response) => {
            const user = response.data;
            localStorage.setItem("@ajude-meu-pet:user", JSON.stringify(user));
            setData({ token: access, user });
          })
          .catch((err) => {
            toast.error("Erro ao recuperar detalhes do usuário!");
            console.log(err);
          });
        history.push("/dashboard");
      })
      .catch(_ => {
        toast.error("Usuário ou senha inválidos!");
      });
  };

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@ajude-meu-pet:user")) || {}
  );

  const updateUser = (userData) => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || "";
    api
      .patch(`/users/${user.id}/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Usuário atualizado");
        localStorage.setItem("@ajude-meu-pet:user", JSON.stringify(response.data));
        setUser(JSON.parse(localStorage.getItem("@ajude-meu-pet:user")) || {});
      })
      .catch(_ => {
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
        register,
        login,
        updateUser,
        logout,
        user,
        token: data.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
