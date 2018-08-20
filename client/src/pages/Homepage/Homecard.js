import React from "react";
import "../../css/main.css";
import "../../css/noscript.css";


const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
      <body className="is-preload">

        <div id="wrapper">
  

            <header id="header">
              <div className="inner">
  

                  <a href="index.html" className="logo">
                    <span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">Phantom</span>
                  </a>
  
  
              </div>
            </header>

            <div id="main">
              <div className="inner">
                <header>
                  <h1>Welcome to MVP Insight</h1>
                  <p>Here you can find all your relevant supply chain and transportation management information to analyze and run your business.</p>
                </header>
                <section className="tiles">
                  <article className="style1">
                    <span className="image">
                      <img src="assets/images/pic01.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>News</h2>
                      <div className="content">
                        <p>Latest industry trends, articles of interest and MVP happenings.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style2">
                    <span className="image">
                      <img src="assets/images/pic02.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Track Shipment</h2>
                      <div className="content">
                        <p>Input your MVP tracking number, and get the current infomation on your delivery. </p>
                      </div>
                    </a>
                  </article>
                  <article className="style3">
                    <span className="image">
                      <img src="assets/images/pic03.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Request Quote</h2>
                      <div className="content">
                        <p>Provide relevant information and customer service team will send you a quote momentarily.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style4">
                    <span className="image">
                      <img src="assets/images/pic04.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Warehouse Management</h2>
                      <div className="content">
                        <p>Review shipping, recieving and work orders; check inventory levels; other WMS activities. </p>
                      </div>
                    </a>
                  </article>
                  <article className="style5">
                    <span className="image">
                      <img src="assets/images/pic05.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Transportation Management</h2>
                      <div className="content">
                        <p>SAccess to your TMS dashboards and data.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style6">
                    <span className="image">
                      <img src="assets/images/pic06.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>International</h2>
                      <div className="content">
                        <p>Provide details on your international needs, and we will have our specialise contact you to arrange your shipment.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style2">
                    <span className="image">
                      <img src="assets/images/pic07.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Create Delivery</h2>
                      <div className="content">
                        <p>Special Set-up to non-MVP Carrier to provide ASN information to our MVP customers.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style3">
                    <span className="image">
                      <img src="assets/images/pic08.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Delivery Calendar</h2>
                      <div className="content">
                        <p>Rolling Calendar showing incoming deliveries to customer docks.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style1">
                    <span className="image">
                      <img src="assets/images/pic09.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>NMVP Service</h2>
                      <div className="content">
                        <p>Let us support your local delivery and service needs</p>
                      </div>
                    </a>
                  </article>
                  <article className="style5">
                    <span className="image">
                      <img src="assets/images/pic10.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Proof of Delivery</h2>
                      <div className="content">
                        <p>Access POD copies or links to your your POD</p>
                      </div>
                    </a>
                  </article>
                  <article className="style6">
                    <span className="image">
                      <img src="assets/images/pic11.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Invoices</h2>
                      <div className="content">
                        <p>Access and download your recent MVP invoices, statement and detailed billing information.</p>
                      </div>
                    </a>
                  </article>
                  <article className="style4">
                    <span className="image">
                      <img src="/assets/images/pic12.jpg" alt="" />
                    </span>
                    <a href="generic.html">
                      <h2>Reporting</h2>
                      <div className="content">
                        <p>Access your daily, weekly and monthly MVP reports.</p>
                      </div>
                    </a>
                  </article>
                </section>
              </div>
            </div>
  
        </div>
  
  
    </body>
    </div>
);
export default Card;