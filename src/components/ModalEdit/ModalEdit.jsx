import { useContext } from "react";
import { TechsContext } from "../../contexts/techsContext";
import { ModalContainer } from "./styled";
import { ModalContent } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  title: yup.string(),
  status: yup.string(),
});

export const ModalEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    isModalEditOpen,
    handleEditOpenModal,
    handleSubmitEdit,
    handleSubmitDelete,
    techTitle,
  } = useContext(TechsContext);

  return isModalEditOpen ? (
    <ModalContainer>
      <ModalContent>
        <header>
          <h1>Editar Tecnologia</h1>
          <button onClick={handleEditOpenModal}>X</button>
        </header>

        <form onSubmit={handleSubmit()}>
          <label htmlFor="title">Nome</label>
          <input
            value={techTitle}
            disabled
            name="title"
            id="title"
            type="text"
            {...register("title")}
          />

          <label htmlFor="status">Selecionar Status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>

          <div>
            <button className="edit" onClick={handleSubmit(handleSubmitEdit)}>
              Salvar alterações
            </button>
            <button
              className="delete"
              onClick={handleSubmit(handleSubmitDelete)}
            >
              Excluir
            </button>
          </div>
        </form>
      </ModalContent>
    </ModalContainer>
  ) : (
    <></>
  );
};
