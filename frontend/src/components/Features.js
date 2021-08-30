import React from "react";
import "./Features.css"
function Features() {
  return (
    <div className="feature-wrap">
      <h1 className="tradezz"> Start your daily notes </h1>
      <div className="card-wrapper">
        <div className="card animate__animated animate__slideInLeft">
          <i className="far fa-user-circle icon"></i>
         
        </div>
        <div className="card animate__animated animate__slideInUp">
          <i className="fas fa-binoculars icon"></i>

          <p className="inspire-p">
            Create Notes to keep yourself accountable
          </p>
        </div>
        <div className="card animate__animated animate__slideInRight">
         <h1> Inspired   </h1>
        </div>
      </div>
    </div>
    
  );