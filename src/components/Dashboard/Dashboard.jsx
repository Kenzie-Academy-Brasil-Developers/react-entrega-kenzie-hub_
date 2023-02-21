import { useNavigate } from "react-router-dom";
import { MainDashboard } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Li } from "../Li/Li";
import { TechsContext } from "../../contexts/techsContext";
import { Modal } from "../Modal/Modal";
import { ModalEdit } from "../ModalEdit/ModalEdit";
import { useState } from "react";
export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  function handleClick() {
    localStorage.clear();
    navigate("/");
  }

  const { handleOpenModal } = useContext(TechsContext);

  const [currentInputValeu, setCurrentInputValue] = useState("");

  return (
    <MainDashboard>
      <header>
        <h1>Kenzie hub</h1>
        <button onClick={handleClick} className="btn">
          Sair
        </button>
      </header>

      <div className="about">
        <h2>Olá {user.name}</h2> <span>{`${user.course_module}`}</span>
      </div>

      <section>
        <header>
          <h2>Tecnologias</h2>
          <button className="openModal" type="button" onClick={handleOpenModal}>
            +
          </button>
        </header>
        <Modal />
        <ModalEdit />

        <main className="mainUL">
          <ul>
            <Li />
          </ul>
        </main>
      </section>
    </MainDashboard>
  );
};
