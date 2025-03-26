
import React from 'react';
import Image from 'next/image';

import "../styles/loginstyle.css";

export default function Home() {
  
  return (

    <div className= "login-page">

      <header className="banner">
        <div className ="banner-content"></div>
      </header>
        
      <div className = "only-form-image-container">
        <form id="login-form" className="form"> 

          <div className = "logo-container">
            <Image 
              id = "logo-image" 
              src="/images/BlueHHlogo.png" 
              alt="logo"
              width ={150}
              height = {150}
            />
          </div>
            
          <h2>Portal Login</h2>
            
          <div className="login-info">
            <label htmlFor="username" className="sr-only">
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="input-field"
            />
          </div>
                  
          <div className="login-info">
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="input-field"
              />
          </div>

          <div className="login-info">
            <button id="login-button" type="submit" className="login-button">
              Login
            </button>
          </div>

          <div className="register">
            <p>I don't have an account.</p>
          </div>

        </form>

            <div id = "login-picture-container" className = "image-container">
                <Image 
                id = "login-image" 
                src="/images/stockhospital.jpg" 
                alt="patient"
                width={500}
                height={300}
                className = "hospital-image"
                />
            </div>
      </div> 
    </div>
  );
}
