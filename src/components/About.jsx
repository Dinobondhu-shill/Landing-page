import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../public/Animation.json'

const About = () => {
  return (
    <div id="about" className="about-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="section-heading">
            <h4>About <em>What We Do</em> &amp; Who We Are</h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>Unveiling Our Passion, Expertise, and Dedication to Delivering Innovative Web Solutions That Empower Your Business to Thrive</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Website Development</a></h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Digital Marketing</a></h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Website Customization</a></h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">Graphics Design</a></h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-item">
                <h4><a href="#">24/7 Support &amp; Help</a></h4>
              </div>
            </div>
            <div className="col-lg-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing  magna.</p>
              
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-image">
            <Lottie animationData={animation}> </Lottie>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default About;