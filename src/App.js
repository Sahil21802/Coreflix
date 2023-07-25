import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/' element={<Home />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
