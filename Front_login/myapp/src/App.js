
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Routes>

        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/" element={<Login/>}></Route>


      </Routes>
      
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
