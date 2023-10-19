import React, { Component } from "react";
import img1 from "../assets/poert1.png";
import img2 from "../assets/port2.png";
import img3 from "../assets/port3.png";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="portfolio container py-5 flex-column">
          <div className="secondaryColor text-center">
            <h1 className="py-3 text-uppercase fw-bold">Portfolio Component</h1>

            <p className="d-flex align-items-center justify-content-center">
              <span className="divider mainBackground "></span>
              <i className="fa-solid fa-star mx-3"></i>
              <span className="divider mainBackground"></span>
            </p>
          </div>

          <div className="images py-3">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="imgBox position-relative">
                  <img src={img1} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className="imgBox position-relative">
                  <img src={img2} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className="imgBox position-relative">
                  <img src={img3} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className="imgBox position-relative">
                  <img src={img1} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className="imgBox position-relative">
                  <img src={img2} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="col-md-4">
                <div className="imgBox position-relative">
                  <img src={img3} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
