import React from "react";
import { PersonCircle } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FormPage = ({handleScene}) => {
  return (
    <motion.div 
    className="container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 1, duration: 1.2}}>
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <PersonCircle color="black" size={100}/>
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i class="bi bi-person-circle"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <Link to="/photos">
            <button type="button" className="btn btn-secondary btn-block" onClick={() => handleScene('photos')}>
              LOGIN
            </button>
            </Link>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a href="https://www.google.com/" style={{color: 'white'}}>Forgot your password</a>
              </div>
            </div>
          </form>
          <div className="social">
            <a href="https://www.google.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.google.com/">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.google.com/">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FormPage;
