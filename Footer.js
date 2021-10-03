import React from "react";
import '../Styles/home.css';


const Footer = () => {
  return (
    <>
      <footer>
      <hr style={{marginTop:"50px", marginBottom:"-20px",color:"#707577", height:"2px"}}/>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>COMPANY</h3>
                  <ul>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="https://www.zomato.com/who-we-are">About Us</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="https://www.zomato.com/blog/">Blogs</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="/report">Report Fraud</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="https://www.zomato.com/contact">Contact</a>
                    </li>
                  </ul>
                  
                </div>

                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>FOR FOODIES</h3>
                  <ul>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="https://www.zomato.com/policies/">Code of Conduct</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="https://community.zomato.com/">Community</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="https://www.zomato.com/bloggers">FAQs</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>FOR YOU</h3>
                  <ul>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="https://www.zomato.com/policies/privacy/">Privacy</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="https://www.zomato.com/policies/terms-of-service/">Terms</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="https://www.zomato.com/directory">Directory</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="https://www.zomato.com/policies/security/">Security</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>KEEP IN TOUCH</h3>
                  <div className="row">
                    <div className="col-1">
                      <a href="https://www.facebook.com/zomato" target="_blank">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                      
                    </div>
                    <div className="col-1">
                      <a href="https://www.instagram.com/zomato/" target="_blank">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-1">
                    <a href="https://www.youtube.com/c/zomato" target="_blank">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </a>
                    </div>
                    <div className="col-6">
                    <a href="https://twitter.com/zomato" target="_blank">
                      <i class="fab fa-twitter fontawesome-style"></i>    
                    </a>
                      
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="mt-5">
                <p className="main-hero-para text-center w-100" style={{fontSize:" x-small",marginTop: "-25px",color:"#9a9a9a"}}>
               By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
               Copyright @ 2021 Nikhilraj Desale. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;