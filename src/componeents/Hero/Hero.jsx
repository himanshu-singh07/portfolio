/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Building Digital <br />
          Experiences <br />
        That Inspire</h2>
        <span>Passionate Frontend Developer | Transforinng <br />
        Ideas into seamless and Visually Stunnig Web Solutions</span>
      </div>
      <div className="hero-right">
        <div className="image">
          <img className="react-image" src={assets.reactlogo} alt="" />
          
        </div>
        <div>
          <img className="avtar-image" src={assets.killua} alt="" />
          <div className="other-image">
            <img src={assets.nextlogo} alt="" />
            <img src={assets.mongodblogo} alt="" />
            <img src={assets.expresslogo} alt="" />
            <img src={assets.nodelogo} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
