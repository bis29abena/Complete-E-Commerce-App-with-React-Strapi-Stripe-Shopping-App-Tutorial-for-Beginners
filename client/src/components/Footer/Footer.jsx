import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQs</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              laudantium similique mollitia, porro facilis rerum modi quisquam
              distinctio voluptates alias laborum et dolores obcaecati
              dignissimos. Quisquam excepturi sed nobis aut.{" "}
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              placeat nisi nulla qui est commodi, possimus aliquid error et
              laboriosam dicta dolorum asperiores itaque veniam, autem
              necessitatibus nostrum neque aperiam.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">AJSTORE</span>
            <span className="copyright">
              &copy; Copyright 2023 , All Rights Reservedd 
            </span>
          </div>
          <div className="right">
            <img className="paymentImg" src="/assets/images/payment.png" alt="payment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
