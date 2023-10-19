import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="head mainBackground ">
          <div className="container text-center py-5">
            <div className="row g-4">
              <div className="col-md-4">
                <h3 className="text-uppercase mb-3">Location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65242</p>
              </div>
              <div className="col-md-4">
                <h3 className="text-uppercase mb-3">Around The Web</h3>
                <div className="icons">
                  <i className="fa-brands fa-facebook mx-1 border border-1 border-white p-2 rounded-circle"></i>
                  <i className="fa-brands fa-twitter mx-1 border border-1 border-white p-2 rounded-circle"></i>
                  <i className="fa-brands fa-linkedin mx-1 border border-1 border-white p-2 rounded-circle"></i>
                  <i className="fa-solid fa-globe mx-1 border border-1 border-white p-2 rounded-circle"></i>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-uppercase mb-3">About Freelancer </h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
          <p className="secondaryBackground text-center text-white py-4 m-0">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </>
    );
  }
}
