import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

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

  const isExpired = () => {
    if (!!data.token) {
      let decoded = jwtDecode(data.token).exp < Date.now() / 1000;
      if (decoded) {
        setData({});
        localStorage.clear();
        history.push("/");
      }
    }
  };

  useEffect(() => isExpired(), []);

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
        localStorage.setItem(
          "@ajude-meu-pet:user",
          JSON.stringify(response.data)
        );
        setData({ token, user: response.data });
      })
      .catch((_) => {
        toast.error("Nome de usuário já existente");
      });
  };
  const logout = () => {
    localStorage.removeItem("@ajude-meu-pet:token");
    localStorage.removeItem("@ajude-meu-pet:user");
    setData({});
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
        isExpired,
        user: data.user,
        token: data.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
