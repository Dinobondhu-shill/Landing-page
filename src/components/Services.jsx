import React from 'react';

const Services = () => {
  return (
    <div id="services" className="services section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4>Amazing <em>Services &amp; Features</em> for you</h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>Offering a Wide Range of Outstanding Services and Cutting-Edge Features to Transform Your Digital Vision into Reality</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="service-item first-service">
            <div className="icon"></div>
            <h4>Custom Website Development</h4>
            <p>Tailor-made solutions for your unique business needs.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item second-service">
            <div className="icon"></div>
            <h4>E-Commerce Development</h4>
            <p>Build user-friendly online stores to boost your sales.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item third-service">
            <div className="icon"></div>
            <h4>Responsive Design</h4>
            <p>Websites optimized for all devices, from mobile to desktop.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className="icon"></div>
            <h4>Website Maintenance</h4>
            <p>Keep your website updated, secure, and bug-free.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className="icon"></div>
            <h4>SEO Optimization</h4>
            <p>Improve your website’s visibility and search rankings.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className="icon"></div>
            <h4>Web Application Development</h4>
            <p>Feature-rich, scalable, and secure web apps for your business.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  );
};

export default Services;