import { Routes, Route, useNavigate } from "react-router-dom";
import { Registro } from "./components/Registro/Registro";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   token !== null && navigate("/dashboard");
  // }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
