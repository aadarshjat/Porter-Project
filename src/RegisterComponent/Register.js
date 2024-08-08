import "./Register.css" ;
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from "../Apiurl";

function Register() {
  const [ Nameoutput , setNameoutput ] = useState();
  const [ Emailoutput , setEmailoutput ] = useState();
  const [ Passwordoutput , setPasswordoutput ] = useState();
  const [ Mobileoutput , setMobileoutput ] = useState();
  const [ Addressoutput , setAddressoutput ] = useState();
  const [ Cityoutput , setCityoutput ] = useState();
  const [ Genderoutput , setGenderoutput ] = useState();
  const [ Output , setOutput ] = useState();

  const [ Name , setName ] = useState(null);
  const [ Email , setEmail ] = useState(null);
  const [ Password , setPassword ] = useState(null);
  const [ Mobile , setMobile ] = useState(null);
  const [ Address , setAddress ] = useState(null);
  const [ City , setCity ] = useState(null);
  const [ Gender , setGender ] = useState(null);
  
  const handleSubmit=()=>{
    
    if(Name==null)
    setNameoutput("Name is required")
    else if(Email==null)
    setEmailoutput("Email is required")
    else if(Password==null)
    setPasswordoutput("Password is required")
    else if(Mobile==null)
    setMobileoutput("Mobile is required")
    else if(Address==null)
    setAddressoutput("Address is required")
    else if(City==null)
    setCityoutput("City is required")
    else if(Gender==null)
    setGenderoutput("Gender is required")

    else
    {
      const userDetails={"name":Name,"email":Email,"password":Password,"mobile":Mobile,"address":Address,"city":City,"gender":Gender};
      axios.post(_apiurluser+"save",userDetails).then((response)=>{
        console.log(response);
      
      setNameoutput("");
      setEmailoutput("");
      setPasswordoutput("");
      setMobileoutput("");
      setAddressoutput("");
      setCityoutput(""); 
      setGenderoutput(""); 
      setOutput("User register successfully");

      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    
    });
  }
  };

  return (
    
    <div id="Registerform">
    <h1 > REGISTER HERE!!!</h1>
    
    <span style={{"color":"blue"}}>{Output}</span>

    <form > 
   
 <span style={{"color":"blue"}}>{Nameoutput}</span>
  <div class="form-group">
  
    <label for="Name">Name :</label>
    <input type="Text" class="form-control" style={{"width":"50%"}} value={Name} onChange={e => setName(e.target.value)} required placeholder="Enter Your Name Here"/>
  </div>
  
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
 
  <span style={{"color":"blue"}}>{Mobileoutput}</span>
  <div class="form-group">
  
    <label for="Mobile">Mobile :</label>
    <input type="Text" class="form-control" style={{"width":"50%"}} value={Mobile} onChange={e => setMobile(e.target.value)} required  minLength={10} maxLength={10} placeholder="Enter Your Number Here"/>
  </div>
 
  <span style={{"color":"blue"}}>{Addressoutput}</span>
  <div class="form-group">
  
    <label for="Address">Address :</label>
    <input type="Textarea" class="form-control" style={{"width":"50%"}} required  value={Address} onChange={e => setAddress(e.target.value)}  placeholder="Enter Your Address Here"/>
  </div>
 
  <span style={{"color":"blue"}}>{Cityoutput}</span>
  <div class="form-group">
  
    <label for="City">City :</label>
    <select class="form-control" style={{"width":"16%"}} value={City} onChange={e => setCity(e.target.value)} required  >
    <option >---Select Your City--- </option>
    <option >Indore </option>
    <option >Ujjain </option>
    <option >Dhar </option>
    <option >Dewas </option>

    </select>

    </div>
 <br />
 <span style={{"color":"blue"}}>{Genderoutput}</span>
    <div class="form-group">
  
    <label for="Gender">Gender :</label>
    <input type="Radio" name="Gender" value="Male" onChange={e => setGender(e.target.value)}  /> &nbsp;Male
    &nbsp; &nbsp;
    <input type="Radio" name="Gender" value="Female" onChange={e => setGender(e.target.value)}  /> &nbsp;Female

  </div>
 <br/>

 <div>
  <button onClick={handleSubmit} type="button"  class="btn btn-success">Submit</button>
 </div>
</form>

</div>
    
    
  );
}

export default Register;
