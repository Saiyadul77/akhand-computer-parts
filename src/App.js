import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import BusinessSummary from './Pages/Home/BusinessSummary/BusinessSummary';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItem from './Pages/ManageItem/ManageItem';
import Footer from './Pages/Shared/Footer/Footer';
// import PartsDetail from './Pages/PartsDetail/PartsDetail';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyingModel from './Pages/Home/BuyingModel/BuyingModel';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Admin/Users';
import Blogs from './Pages/Blogs/Blogs';



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
        <Route path='/buying' element={
          <RequireAuth>
            <BuyingModel></BuyingModel>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='admin' element={<Users></Users>}></Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/business' element={<BusinessSummary></BusinessSummary>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
