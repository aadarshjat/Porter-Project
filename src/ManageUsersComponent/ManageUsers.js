import "./ManageUsers.css"
import { useState , useEffect } from "react";
import axios from "axios";
import { _apiurluser } from "../Apiurl";
import { useNavigate } from "react-router-dom";

function ManageUsers(){

   const [ userDetails , setUserDetails ]=useState([]);
   const navigate = useNavigate();

  useEffect(()=>{
   axios.get(_apiurluser+"fetch?role=user").then((response)=>{
   setUserDetails(response.data)
   });

  });

  const manageuserstatus=(_id,status)=>{
    if (status=="block")
    {
       let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":0}};
      axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
         navigate("/manageusers");
      }).catch((error)=>{
         console.log(error);
       });
      }
  else if (status=="verify")
  {
     let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":1}};
    axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
       navigate("/manageusers");
    }).catch((error)=>{
       console.log(error);
     });
    }
    else
    {
       let deleteDetails={"data":{"_id":_id}};
    axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
       navigate("/manageusers");
    }).catch((error)=>{
       console.log(error);
     });
    }

      }
   
  return(
         <div id="manageusers">
            <h2>View & Manage Users Details</h2>

           <tr/> 
          <table border="4" cellPadding="12" cellSpacing="5">
            <tr>
               <th>RegId</th>
               <th>Name</th>
               <th>Email</th>
               <th>Mobile</th>
               <th>Address</th>
               <th>city</th>
               <th>Gender</th>
               <th>Info</th>
               <th>Status</th>
               <th>Action</th>
            </tr>
            {
               userDetails.map((row)=>(
                  <tr>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mobile}</td>
                  <td>{row.address}</td>
                  <td>{row.city}</td>
                  <td>{row.gender}</td>
                  <td>{row.info}</td>
                  <td>
                     {
                       row.status==1 && <a style={{"color":"orange"}} onClick={()=>{manageuserstatus(row._id,"block" )}}>Block User</a>
                     }
                     {
                         row.status==0 && <a style={{"color":"green"}} onClick={()=>{manageuserstatus(row._id,"verify" )}}>Verify User</a> 
                     }
                  </td>
                  <td><a style={{"color":"red"}} onClick={()=>{manageuserstatus(row._id,"delete" )}}>Delete User</a> </td>
                  </tr>
               ))
            }
           </table>

         </div>
    );
}
export default ManageUsers;