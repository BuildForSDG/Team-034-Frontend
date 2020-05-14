import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const RegisterForm = () => {
  return (
    <>
      <div className="limiter">
        <div className="container-auth-form">
          <div className="wrap-auth-form">
            <form className="auth-form-form">
              <h2 className="text-center register-"> Register </h2>
              <div className="wrap-auth-form-input ">
                <input className="auth-form-input" type="text" name="fullName" />
                <span className="focus-auth-form-input"></span>
                <span className="label-auth-form-input">Full Name</span>
              </div>
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
              <div className="wrap-auth-form-input ">
                <input className="auth-form-input" type="password" name="pass" />
                <span className="focus-auth-form-input"></span>
                <span className="label-auth-form-input">Confirm Password</span>
              </div>
              <div className="mb-5 container-auth-form-form-btn">
                <button className="auth-form-form-btn">Register</button>
              </div>
              <div className="quest-text">
                <div className="">
                  <span className="txt1 ">
                    Already have an account ?{' '}
                    <Link className="text-primary-" to="/login">
                      {' '}
                      Login{' '}
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

export default RegisterForm;

