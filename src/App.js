import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import Habits from "./Pages/Habits";
import Today from "./Pages/Today";
import History from "./Pages/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./context/MyContext";
import { useState } from "react";

export default function App() {

  const [loginOk,setLoginOk] = useState([]);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{loginOk,setLoginOk}}>
        <Routes>
          <Route path="/" element={<LoginScreen />}/>
          <Route path="/cadastro" element={<RegisterScreen />}/>
          <Route path="/habitos" element={<Habits />}/>
          <Route path="/hoje" element={<Today />}/>
          <Route path="/historico" element={<History />}/>
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
