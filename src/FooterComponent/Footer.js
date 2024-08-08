import "./Footer.css" ;
import { useEffect , useState } from "react";

function Footer() {

const [ FooterContent , setFooterContent ] = useState();

useEffect(()=>{
    if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
    {
        setFooterContent(
            <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="">Packers and Movers</a>, All Right Reserved.
                    </div>
                   
            </div>
        </div>
    </div>
        );
           
    
    }
   
    else
    {
        setFooterContent(
            <div class="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{"margin-top":" 6rem"}}>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-light mb-4">Address</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i> X street Indore M.P</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>XXX XXX XXXX</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-light mb-4">Services</h4>
                        <a class="btn btn-link" href="">Air Freight</a>
                        <a class="btn btn-link" href="">Sea Freight</a>
                        <a class="btn btn-link" href="">Road Freight</a>
                        <a class="btn btn-link" href="">Industry solutions</a>
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="">Packers and Movers</a>, All Right Reserved.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            {/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                            
                        
                    
                </div>
                </div>
            </div>
        </div>
        </div>
        
    
        );
    }
})

  return (
    <div >
     
     { FooterContent }
    
    </div>
    
        );
}

export default Footer;
