import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItem from './Pages/ManageItem/ManageItem';
// import PartsDetail from './Pages/PartsDetail/PartsDetail';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
