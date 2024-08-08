import "./App.css";

import { Routes , Route } from 'react-router-dom';
import Nav from "./NavComponent/Nav";
import Home from "./HomeComponent/Home";
import Service from "./ServiceComponent/Service";
import Login from "./LoginComponent/Login";
import Register from "./RegisterComponent/Register";
import Footer from "./FooterComponent/Footer";
import Features from "./FeaturesComponent/Features";
import Price from "./PriceComponent/Price";
import Team from "./TeamComponent/Team";
import AdminHome from "./AdminHomeComponent/AdminHome";
import UserHome from "./UserHomeComponent/UserHome";
import Logout from "./LogoutComponent/Logout";
import ManageUsers from "./ManageUsersComponent/ManageUsers";
import CPAdmin from "./CPAdminComponent/CPAdmin";
import EPAdmin from "./EPAdminComponent/EPAdmin";

function App() {
  return (
    <div> 

    <Nav />

    <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/Service" element={<Service />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Register" element={<Register />}></Route>
    <Route path="/Features" element={<Features />}></Route>
    <Route path="/Price" element={<Price />}></Route>
    <Route path="/AdminHome" element={<AdminHome />}></Route>
    <Route path="/userHome" element={<UserHome/>}></Route>
    <Route path="/Logout" element={<Logout/>}></Route>
    <Route path="/ManageUsers" element={<ManageUsers/>}></Route>
    <Route path="/CPAdmin" element={<CPAdmin/>}></Route>
    <Route path="/EPAdmin" element={<EPAdmin/>}></Route>
    

    </Routes>

   <Team />    

    <Footer />

</div>
    
 );
}

export default App ;
