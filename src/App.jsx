import { Routes, Route } from "react-router-dom";
import { Registro } from "./components/Registro/Registro";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    {
      token ? navigate("/dashboard") : navigate("/");
    }
  }, [token]);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
