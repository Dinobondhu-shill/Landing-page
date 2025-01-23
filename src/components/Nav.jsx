const Nav = () => {
  return (
    <>
      {/* ***** Header Area Start ***** */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src="/public/codefree.png" alt="logo" width={30} height={70} />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">Home</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                 
                  <li className="scroll-to-section">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#newsletter">Newsletter</a>
                  </li>
                  <li>
                    <div className="sign-in">
                      <a id="modal_trigger" href="#modal"
                       onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("modal").style.display = "block";
                      }}>
                        <i className="fa fa-sign-in-alt"></i> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

      <div
        id="modal"
        className="popupContainer"
        style={{ display: "none", marginTop:'50px', zIndex:'50' }}
      >
        <div className="popupHeader">
          <span className="header_title">Login</span>
          <span className="modal_close" onClick={() => {
    document.getElementById("modal").style.display = "none";
  }}>
            <i className="fa fa-times"></i>
          </span>
        </div>

        <section className="popupBody">
          {/* Social Login */}
          <div className="social_login">
            <div>
              <a href="javascript:void(0)" className="social_box fb">
                <span className="icon">
                  <i className="fab fa-facebook"></i>
                </span>
                <span className="icon_title">Connect with Facebook</span>
              </a>

              <a href="javascript:void(0)" className="social_box google">
                <span className="icon">
                  <i className="fab fa-google-plus"></i>
                </span>
                <span className="icon_title">Connect with Google</span>
              </a>
            </div>

            <div className="centeredText">
              <span>Or use your Email address</span>
            </div>

            <div className="action_btns">
              <div className="one_half">
                <a href="javascript:void(0)" id="login_form" className="btn">
                  Login
                </a>
              </div>
              <div className="one_half last">
                <a href="javascript:void(0)" id="register_form" className="btn">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          {/* Username & Password Login form */}
          <div className="user_login">
            <form>
              <label>Email / Username</label>
              <input type="text" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me on this computer</label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="javascript:void(0)" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="javascript:void(0)" className="btn btn_red">
                    Login
                  </a>
                </div>
              </div>
            </form>

            <a href="javascript:void(0)" className="forgot_password">
              Forgot password?
            </a>
          </div>

          {/* Register Form */}
          <div className="user_register">
            <form>
              <label>Full Name</label>
              <input type="text" />
              <br />

              <label>Email Address</label>
              <input type="email" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="send_updates" type="checkbox" />
                <label htmlFor="send_updates">
                  Send me occasional email updates
                </label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="javascript:void(0)" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="javascript:void(0)" className="btn btn_red">
                    Register
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Nav;
