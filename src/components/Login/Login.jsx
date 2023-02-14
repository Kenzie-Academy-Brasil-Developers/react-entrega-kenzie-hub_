import { api } from "../../api/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { MainLogin } from "./styled";

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

  const navigate = useNavigate();
  async function onSubmitFunction(data) {
    try {
      const response = await api.post("/sessions", data);
      toast.success("Usuário logado com sucesso");
      const user = JSON.stringify(response.data.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", user);
      navigate("/dashboard");
    } catch (erro) {
      toast.error("Email ou senha incorretos.");
    }
    return response.data;
  }

  return (
    <MainLogin>
      <h1>Kenzie hub</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
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
