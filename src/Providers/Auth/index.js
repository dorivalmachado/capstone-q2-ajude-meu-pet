import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");

  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@ajude-meu-pet:token") || "";
    const user = localStorage.getItem("@ajude-meu-pet:user") || {};

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const history = useHistory();

  const register = (userData) => {
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
        setUserId(jwt_decode(response.data.accessToken).user_id);
        const { accessToken } = response.data;
        localStorage.setItem("@ajude-meu-pet:token", accessToken);
        localStorage.setItem("@ajude-meu-pet:user", JSON.stringify(user));
        setData({token: accessToken, user});
        history.push("/services");
      })
      .catch((_) => {
        toast.error("Usuário ou senha inválidos!");
      });
  };

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
        localStorage.setItem(
          "@ajude-meu-pet:user",
          JSON.stringify(response.data)
        );
        setUser(JSON.parse(localStorage.getItem("@ajude-meu-pet:user")) || {});
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
        register,
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
