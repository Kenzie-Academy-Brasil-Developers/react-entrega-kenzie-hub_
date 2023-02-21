import { createContext, useState } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export function TechsProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [tech, setTech] = useState([]);
  const [techId, setTechId] = useState("");
  const [techTitle, setTechTitle] = useState("");

  const { user } = useContext(UserContext);

  async function onSubmitFunctionTech(data) {
    const token = localStorage.getItem("token");

    try {
      const response = await api.post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTech(response.data);
      toast.success("Tecnologia cadastrada com sucesso");
      setIsModalOpen(!isModalOpen);
    } catch (error) {
      toast.error(error);
    }
  }

  async function handleSubmitEdit(data) {
    const token = localStorage.getItem("token");
    try {
      const response = await api.put(`/users/techs/${techId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newTechs = tech.map((tech) => {
        if (tech.id === techId) {
          return { ...tech, ...data };
        }
        return tech;
      });

      handleUpdateTechs(newTechs);

      setTech(newTechs);
      toast.success("Tecnologia editada com sucesso.");
      setIsModalEditOpen(false);
    } catch (erro) {
      toast.error(erro.response.data.message);
    }
  }
  const handleUpdateTechs = (newTechs) => {
    setTech(newTechs);
  };

  async function handleSubmitDelete() {
    const token = localStorage.getItem("token");

    try {
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newTechs = tech.map((techh) => {
        if (techh.id === techId) {
          return { ...techh, ...data };
        }
        return techh;
      });
      setTech(newTechs);
      toast.success("Tecnologia deletada com sucesso.");
      setIsModalEditOpen(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleEditOpenModal(event) {
    const newTechTitle = user.techs.map((tech) => {
      if (tech.id === event.target.id) {
        setTechTitle(tech.title);
        return tech;
      }

      return tech;
    });

    setTechId(event.target.id);
    setIsModalEditOpen(!isModalEditOpen);
  }

  return (
    <TechsContext.Provider
      value={{
        handleOpenModal,
        handleEditOpenModal,
        isModalOpen,
        isModalEditOpen,
        setIsModalOpen,
        onSubmitFunctionTech,
        tech,
        handleSubmitEdit,
        handleSubmitDelete,
        techTitle,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
}
