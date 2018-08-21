import React from "react";
import "../css/main.css";
import "../css/noscript.css";


const Footer = props => (
  
  <div>

            <footer id="footer">
              <div className="inner">
    
                <section>
                  <h2>Follow</h2>
                  <ul className="icons">
                    <li><a href="https://www.facebook.com/mvpship" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/mvp_logistics/" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://www.linkedin.com/company/mvpship/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="tel:18883905320" className="icon style2 fa-phone"><span className="label">Phone</span></a></li>
                    <li><a href="mailto:info@mvpship.com" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
                  </ul>
                </section>
                <ul className="copyright">
                  <li>&copy; MVP Logistics and Services. All rights reserved 2018</li>
                </ul>
              </div>
            </footer>
  
        </div>
  
  
  
);
export default Footer;