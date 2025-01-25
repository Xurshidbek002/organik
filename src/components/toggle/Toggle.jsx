import React from "react";
import "./Toggle.scss";
import btn from "../../assets/Aerrow.svg";
import Stars from '../../assets/Stars.svg'
import Photo2 from '../../assets/Photo1.png'

function Toggle() {
  return (
    <>
      <div className="toggle">
        <div className="container">
          <p className="toggle-text">offer</p>
          <div className="toggle__box">
            <h1 className="toggle__box-title">We Offer Organic For You</h1>
            <button className="toggle__box-btn">
              View All Product
              <img src={btn} alt="" className="toggle__box-img" />
            </button>
          </div>

          <div className="toggle__cards">
            <div className="toggle__cards-card">
              <p>Vegetable</p>
              <div className="toggle__cards-bgc">
                <img src={Photo2} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="toggle__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="toggle__cards-card">
              <p>Vegetable</p>
              <div className="toggle__cards-bgc">
                <img src={Photo2} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="toggle__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="toggle__cards-card">
              <p>Vegetable</p>
              <div className="toggle__cards-bgc">
                <img src={Photo2} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="toggle__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="toggle__cards-card">
              <p>Vegetable</p>
              <div className="toggle__cards-bgc">
                <img src={Photo2} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="toggle__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Toggle;
