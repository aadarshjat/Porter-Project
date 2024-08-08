import "./CPAdmin.css"
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from "../Apiurl";

function CPAdmin(){

    const [ Opassoutput , setOpassoutput ]=useState();
    const [ Npassoutput , setNpassoutput ]=useState();
    const [ CNpassoutput , setCNpassoutput ]=useState();

    const [ Output , setOutput ]=useState();

    const [ Opass , setOpass ]=useState(null);
    const [ Npass , setNpass ]=useState(null);
    const [ CNpass , setCNpass ]=useState(null);



    const handleSubmit=()=>{
    if(Opass==null)
     setOpassoutput("Old pssword is required")
    else if(Npass==null)
     setNpassoutput("New pssword is required")
    else if(CNpass==null)
     setCNpassoutput("Conform New password is required")
    else if(Npass !== CNpass)
     setOutput(" New & Conform New password mismatch")
    
else
   {
    axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")+"&password="+Opass).then((response)=>{
      
    const UpdateDetails= {"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"password":Npass}};
    axios.patch(_apiurluser+"update",UpdateDetails).then((response)=>{

       setOutput("Password Changed Successfully");
       Opass("");
       Npass("");
       CNpass("")

      
    }).catch((error)=>{
      setOutput("there is an error")
     
    }) 
  }).catch((error)=>{
    setOutput("Invalid current password")
  })
}
    }
  
    return(
      <div>
      <h2> Change Password Here!!! </h2>

      <span style={{"color":"blue"}}>{Output}</span>

    <form > 
  
  <span style={{"color":"blue"}}>{Opassoutput}</span>
  <div class="form-group">
  
  <label for="Opass">Old Password :</label>
  <input type="Password" class="form-control" style={{"width":"50%"}} value={Opass} onChange={e => setOpass(e.target.value)} required  placeholder="Enter Your Old Password Here"/>
</div>
 
<span style={{"color":"blue"}}>{Npassoutput}</span>
<div class="form-group">
  
    <label for="Npass"> New Password :</label>
    <input type="Password" class="form-control" style={{"width":"50%"}} value={Npass} onChange={e => setNpass(e.target.value)}  required   placeholder="Enter Your New Password Here"/>
  </div>
 
  <span style={{"color":"blue"}}>{CNpassoutput}</span>
<div class="form-group">
  
    <label for="CNpass"> Conform New Password :</label>
    <input type="Password" class="form-control" style={{"width":"50%"}} value={CNpass} onChange={e => setCNpass(e.target.value)}  required   placeholder="Conform Your New Password Here"/>
  </div>
 
 <br/>


 <div>
  <button onClick={handleSubmit} type="button"  class="btn btn-success">Submit</button>
 </div>
</form>
    
      </div>
    );
}
export default CPAdmin;