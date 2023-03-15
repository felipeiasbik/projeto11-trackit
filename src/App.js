import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import Habits from "./Pages/Habits";
import Today from "./Pages/Today";
import History from "./Pages/History";
import { BrowserRouter,Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />}/>
        <Route path="/cadastro" element={<RegisterScreen />}/>
        <Route path="/habitos" element={<Habits />}/>
        <Route path="/hoje" element={<Today />}/>
        <Route path="/historico" element={<History />}/>
      </Routes>
    </BrowserRouter>
  );
}
