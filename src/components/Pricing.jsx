import React from 'react';

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-tables">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading">
            <h4>We Have The Best Pre-Order <em>Prices</em> You Can Get</h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>Take Advantage of Our Limited-Time Pre-Order Offers and Get Premium Web Development Services at the Best Prices You’ll Ever Find!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item-regular">
            <span className="price">$1000</span>
            <h4> Basic Plan: Laravel Project</h4>
            <div className="icon">
              <img src="assets/images/pricing-table-01.png" alt="" />
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>20 TB of Storage</li>
              <li>Fully Custom Laravel Backend</li>
              <li>Clean and Optimized Code</li>
              <li>Basic Admin Panel Integration</li>
              <li>Responsive Design for All Devices</li>
              <li>1 Revision Included</li>
              <li>Delivery: 7–10 Days</li>
            </ul>
            <div className="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item-pro">
            
          <span className="price ">$3500</span>
            <h4 className='premium-pack'> Premium Plan: MERN Stack</h4>
            <div className="icon">
              <img src="assets/images/pricing-table-01.png" alt="" />
            </div>
            <ul>
              <li >Full MERN Stack Development (MongoDB, Express.js, React, Node.js)</li>
              <li >Custom API Development</li>
              <li >Advanced Dashboard and Analytics Features</li>
              <li >Real-Time Data Handling </li>
              <li >Fully Responsive, Modern Design</li>
              <li >High Performance & Scalability</li>
              <li >SEO-Ready and Optimized</li>
              <li >3 Revisions Included</li>
              <li >Delivery: 15–20 Days
              </li>
            </ul>
            <div className="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item-regular">
            
          <span className="price">$2000</span>
            <h4> Standard Plan: React + Laravel Backend</h4>
            <div className="icon">
              <img src="assets/images/pricing-table-01.png" alt="" />
            </div>
            
            <ul>
              <li>React-Based Dynamic Frontend</li>
              <li>Laravel Backend for Scalability</li>
              <li>RESTful API Integration</li>
              <li>Advanced Admin Dashboard</li>
              <li >Fully Responsive Design</li>
              <li >SEO Optimization</li>
              <li >2 Revisions Included</li>
              <li >Delivery: 10–15 Days</li>
            </ul>
            <div className="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Pricing;