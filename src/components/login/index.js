import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  return (
    <>
      <div className="limiter">
        <div className="container-auth-form">
          <div className="wrap-auth-form">
            <form className="auth-form-form">
              <h2 className="text-center register-"> Login </h2>
             
              <div className="wrap-auth-form-input ">
                <input className="auth-form-input" type="text" name="email" />
                <span className="focus-auth-form-input"></span>
                <span className="label-auth-form-input">Email</span>
              </div>
              <div className="wrap-auth-form-input ">
                <input className="auth-form-input" type="password" name="pass" />
                <span className="focus-auth-form-input"></span>
                <span className="label-auth-form-input">Password</span>
              </div>
            
              <div className="mb-5 container-auth-form-form-btn">
                <button className="auth-form-form-btn">Login</button>
              </div>
              <div className="quest-text">
                <div className="">
                  <span className="txt1 ">
                    Don't have an account ?{' '}
                    <Link className="text-primary-" to="/register">
                      {' '}
                      Register{' '}
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

