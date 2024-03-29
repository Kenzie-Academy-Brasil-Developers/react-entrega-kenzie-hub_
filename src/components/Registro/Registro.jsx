import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Main } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const schema = yup.object({
  name: yup.string().required("Nome obrigatório."),
  email: yup.string().required("Email obrigatório."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(8, "No mínimo 8 caracteres.")
    .matches(/(\d)/, "Deve conter ao menos 1 número.")
    .matches(/[a - z]/, "Deve conter ao menos uma letra minúscula.")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula.")
    .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial."),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual à senha."
    )
    .required("Confirmação de senha é obrigatória."),
  bio: yup.string().required("A bio é obrigatória."),
  contact: yup
    .string()
    .required("A informação de contato é obrigatória.")
    .min(8, "Deve ter 8 caracteres."),
  course_module: yup.string().required("Selecione um módulo."),
});

export const Registro = () => {
  const [select, setSelect] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { onSubmitFunctionCadastro } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <Main>
      <div>
        <h1>KenzieHub</h1>
        <Link className="link" to={"/"}>
          Voltar
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmitFunctionCadastro)} noValidate>
        <div className="divForm">
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
        </div>
        <section>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>

          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <p>{errors.bio?.message}</p>

          <label htmlFor="contact">Contato</label>
          <input
            id="contact"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>

          <select
            id="select"
            name=""
            onChange={(e) => setSelect(e.target.value)}
            {...register("course_module")}
          >
            <option value="">Selecione um módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend avançado)">
              Segundo módulo (Frontend avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend avançado)">
              Quarto módulo (Backend avançado)
            </option>
          </select>
          <p>{errors.select?.message}</p>
        </section>

        <button type="submit">Cadastrar</button>
      </form>
    </Main>
  );
};
