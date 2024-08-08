import "./Nav.css" ;
import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import Auth from "../AuthComponent/Auth";

function Nav() {

  const [ NavContent , setNavContent ] = useState();

  useEffect(()=>{
    if(localStorage.getItem("role")=="admin")
    {
        setNavContent(
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
            <a href="index.html" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
                <h2 class="mb-2 text-white">Packers and Movers</h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a class="nav-item nav-link active"><Link style={{"color":"black"}} to="/AdminHome">Home</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Logout">Logout</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/ManageUsers">Manage Users</Link></a>
                    <div class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                    <div class="dropdown-menu fade-up m-0">
                        <a  class="dropdown-item"><Link style={{"color":"black"}} to="/CPAdmin">Change Passwoed</Link></a>
                        <a  class="dropdown-item"><Link style={{"color":"black"}} to="/EPAdmin">Edit Profile</Link></a>                       
                    </div>
                </div>
                   {/* <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Service">Service</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Features">Features</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Price">Price</Link></a> */}
                 
                </div>
                <h4 class="m-0 pe-lg-5 d-none d-lg-block"> Welcome Admin - {localStorage.getItem("email")} </h4>
            </div>
        </nav>
        )
    }
    else if (localStorage.getItem("role")=="user")
    {
        setNavContent(
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
            <a href="index.html" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
                <h2 class="mb-2 text-white">Packers and Movers</h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a class="nav-item nav-link active"><Link style={{"color":"black" }} to="/UserHome">Home </Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Logout">Logout</Link></a>
                  {/* <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Service">Service</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Register">Register</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Features">Features</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Price">Price</Link></a>*/}
                 
                </div>
                <h4 class="m-0 pe-lg-5 d-none d-lg-block"> welcome User - {localStorage.getItem("email")} </h4>
            </div>
        </nav>
        )
    }
    else
    {
        setNavContent(
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
            <a href="index.html" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
                <h2 class="mb-2 text-white">Packers and Movers</h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a class="nav-item nav-link active"><Link style={{"color":"black"}} to="/">Home</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Service">Service</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Login">Login</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Register">Register</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Features">Features</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"black"}} to="/Price">Price</Link></a>
                 
                </div>
                <h4 class="m-0 pe-lg-5 d-none d-lg-block"><i class="fa fa-headphones text-primary me-3"></i>XXX XXX XXXX</h4>
            </div>
        </nav>
        )
    }
  })

  return (
    <div >
        <Auth />
      { NavContent }
    </div>
  );
}

export default Nav;
