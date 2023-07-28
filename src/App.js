import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login"
import Signup from './pages/signup';
import './App.css';
import { useState } from 'react';

function App() {
  const[email,setEmail]=useState("")
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup email={email}  />} ></Route>
        <Route path='/' element={<Home setEmail={setEmail} email={email}  />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
