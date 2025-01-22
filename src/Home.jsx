import Lottie from 'lottie-react';
import React from 'react';
import hero from '../public/hero.json'

const Home = () => {
  return (
   
  <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
  <div className="">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="heading-text">Build. <br /> Innovate. Succeed <br /> with <span className='codefreeg'>Codefreeg.</span></h2>
                  <p>At <span className='codefreeg '>Codefreeg</span>, we craft fast, responsive, and visually stunning websites tailored to your needs. Let us bring creativity and innovation to help your business thrive online.</p>
                </div>
                <div className="col-lg-12">
                 
                  <div className="white-button scroll-to-section">
                 <h5>
                 Let’s Build Something Amazing Together!
                 </h5>
                    <a href="#contact">Free Quote <i className="fab fa-google-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              
            <Lottie animationData={hero} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;