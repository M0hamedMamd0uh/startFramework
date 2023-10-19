import React, { Component } from "react";
import howeImg from "../assets/avataaars.svg";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home homeBackground py-5">
          <div className="containe py-5">
            <div className="d-flex align-items-center justify-content-center flex-column text-white ">
              <img src={howeImg} alt="" className="homeImg" />
              <h1 className="py-3 text-uppercase fw-bold">Start Framework</h1>

              <p className="d-flex align-items-center">
                <span className="divider"></span>
                <i className="fa-solid fa-star mx-3"></i>
                <span className="divider"></span>
              </p>

              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
