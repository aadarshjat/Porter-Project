import "./Login.css" ;
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from "../Apiurl";
import { useNavigate } from "react-router-dom"

function Login() {
  
  const [ Emailoutput , setEmailoutput ] = useState();
  const [ Passwordoutput , setPasswordoutput ] = useState();
  const [ Output , setOutput ] = useState();
  
  const navigate = useNavigate();
  const [ Email , setEmail ] = useState(null);
  const [ Password , setPassword ] = useState(null);
  
  const handleSubmit=()=>{
    
    if(Email==null)
    setEmailoutput("Email is required")
    else if(Password==null)
    setPasswordoutput("Password is required")

    else
    {
      const userDetails={"email":Email,"password":Password};
      axios.post(_apiurluser+"login",userDetails).then((response)=>{
        console.log(response);
        const userDetails=response.data.userDetails;
        
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("id",userDetails._id);
        localStorage.setItem("name",userDetails.name);
        localStorage.setItem("email",userDetails.email);
        localStorage.setItem("password",userDetails.password);
        localStorage.setItem("mobile",userDetails.mobile);
        localStorage.setItem("address",userDetails.address);
        localStorage.setItem("city",userDetails.city);
        localStorage.setItem("gender",userDetails.gender);
        localStorage.setItem("role",userDetails.role);
        localStorage.setItem("info",userDetails.info);

      userDetails.role=="admin"?navigate("/AdminHome"):navigate("/UserHome");
    
    }).catch((error)=>{
      setOutput("Invalid user or verify your account...");
    }); 
  }
  };
  return (
    <div id="Loginform">
       
       <h1 > LOGIN HERE!!!</h1>
    
    <span style={{"color":"blue"}}>{Output}</span>

    <form > 
  
  <span style={{"color":"blue"}}>{Emailoutput}</span>
  <div class="form-group">
  
  <label for="Email">Email :</label>
  <input type="Email" class="form-control" style={{"width":"50%"}} value={Email} onChange={e => setEmail(e.target.value)} required  placeholder="Enter Your Email Here"/>
</div>
 
<span style={{"color":"blue"}}>{Passwordoutput}</span>
<div class="form-group">
  
    <label for="Password">Password :</label>
    <input type="Password" class="form-control" style={{"width":"50%"}} value={Password} onChange={e => setPassword(e.target.value)}  required   placeholder="Enter Your Password Here"/>
  </div>
 
 <br/>

 <div>
  <button onClick={handleSubmit} type="button"  class="btn btn-success">Submit</button>
 </div>
</form>
    
    </div>
   
  );
}

export default Login;
