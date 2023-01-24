import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


// images
import loginImg from '../assets/images/img-01.png';

export const Login = () => {

    const navigate = useNavigate();

    const initUserData = {email: '', pass: ''};
    const [userData, setUserData] = useState(initUserData)

    const handleChange = ({ target: { value, name } }) => {
        setUserData(pre => ({ ...pre, [name]: value }))
    }

    const handleSubmit = (event) => {
        localStorage.setItem('loggedInUser', JSON.stringify(userData))
        navigate('/')
      }



  return <div className="limiter" >
  <div className="container-login100">
      <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
              <img src={loginImg} alt="IMG" />
          </div>

          <form className="login100-form validate-form" onSubmit={handleSubmit}>
              <span className="login100-form-title">
                  Welcome back!
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" value={userData.pass} onChange={handleChange} placeholder="Password" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
              </div>
              
              <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="submit">
                      Login
                  </button>
              </div>

              <div className="text-center p-t-12">
                  <span className="txt1">
                      Forgot 
                  </span>
                  <a className="txt2" href="#">
                      Username / Password?
                  </a>
              </div>

              <div className="text-center p-t-136">
                  <Link className="txt2" to='/auth/signup'>
                      Create your Account
                      <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                  </Link>
              </div>
          </form>
      </div>
  </div>
</div>;
};
