import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { MainLogin } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const schema = yup.object({
  email: yup.string().required("Email obrigatório."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(8, "No mínimo 8 caracteres.")
    .matches(/(\d)/, "Deve conter ao menos 1 número.")
    .matches(/[a - z]/, "Deve conter ao menos uma letra minúscula.")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula.")
    .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial."),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { onSubmitFunctionLogin } = useContext(UserContext);

  return (
    <MainLogin>
      <h1>Kenzie hub</h1>
      <form onSubmit={handleSubmit(onSubmitFunctionLogin)}>
        <h2>Login</h2>

        <div className="divForm">
          <label htmlFor="email">Email</label>
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
            placeholder="Digite aqui sua senha."
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className="buttons">
          <button type="submit">Entrar</button>

          <span>Ainda não possui uma conta?</span>

          <Link className="cadastro" to={"/register"}>
            Cadastre-se
          </Link>
        </div>
      </form>
    </MainLogin>
  );
};
