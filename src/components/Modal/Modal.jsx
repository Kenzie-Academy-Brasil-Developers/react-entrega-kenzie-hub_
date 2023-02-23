import { useContext } from "react";
import { TechsContext } from "../../contexts/techsContext";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  BtnCadastro,
} from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  title: yup
    .string()
    .required("Título obrigatório.")
    .min(3, "No mínimo 3 caracteres."),
  status: yup.string(),
});

export const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const { onSubmitFunctionTech } = useContext(TechsContext);

  const { isModalOpen, handleOpenModal } = useContext(TechsContext);
  return isModalOpen ? (
    <ModalContainer>
      <ModalContent>
        <header>
          <h1>Cadastrar Tecnologia</h1>
          <CloseButton className="close-button" onClick={handleOpenModal}>
            X
          </CloseButton>
        </header>

        <form onSubmit={handleSubmit(onSubmitFunctionTech)}>
          <label htmlFor="title">Nome</label>
          <input
            id="title"
            type="text"
            placeholder="Insira o nome da tecnologia"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
          <label htmlFor="status">Selecionar Status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>

          <BtnCadastro>Cadastrar Tecnologia</BtnCadastro>
        </form>
      </ModalContent>
    </ModalContainer>
  ) : (
    <></>
  );
};
