import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Photos = ({handleScene}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 1, duration: 1.2,}}>
      <Link to="/login">
      <Carousel className="w-50" style={{marginLeft: '500px', marginTop: '150px'}} onClick={() => handleScene('login')}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/rabbit-9"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://4.bp.blogspot.com/-w8U75TCuhgU/Tzw8TmaclvI/AAAAAAAABJ0/6fMMcRLAceM/s1600/Rabbit3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </Link>
    </motion.div>
  );
};

export default Photos;
