import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [techs, setTechs] = useState({});

  useEffect(() => {}, [techs]);

  useEffect(() => {
    async function verifyLogged() {
      try {
        if (token !== null) {
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const newTechs = response.data.techs;
          setUser(response.data);
          return newTechs;
        } else {
          navigate("/");
        }
      } catch (error) {
        localStorage.clear();
      }
    }
    verifyLogged();
  }, []);

  async function onSubmitFunctionCadastro(data) {
    try {
      const response = await api.post("/users", data);

      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (erro) {
      toast.error(erro);
    }
  }
  async function onSubmitFunctionLogin(data) {
    try {
      const response = await api.post("/sessions", data);

      toast.success("Usuário logado com sucesso");
      const user = JSON.stringify(response.data.user);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (erro) {
      toast.error(erro.response.data.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionCadastro,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
