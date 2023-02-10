import { Link } from "react-router-dom";
import { MainDashboard } from "./styled";

export const Dashboard = () => {
  const userr = localStorage.getItem("user");
  const userOBJ = JSON.parse(userr);

  return (
    <MainDashboard>
      <header>
        <h1>Kenzie hub</h1>
        <Link className="btn" to={"/login"}>
          <button>Sair</button>
        </Link>
      </header>

      <div className="about">
        <h2>Olá {userOBJ.name}</h2> <span>{`${userOBJ.course_module}`}</span>
      </div>

      <section>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>

        <span>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </span>
      </section>
    </MainDashboard>
  );
};
