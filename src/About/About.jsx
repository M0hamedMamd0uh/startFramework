import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about aboutBackground py-5  d-flex justify-content-center align-items-center">
          <div className="container ">
            <div className="d-flex align-items-center justify-content-center flex-column text-white ">
              <h1 className="py-3 text-uppercase fw-bold">About Component</h1>

              <p className="d-flex align-items-center">
                <span className="divider"></span>
                <i className="fa-solid fa-star mx-3"></i>
                <span className="divider"></span>
              </p>

              <div className="container px-5">
                <div className="row g-5">
                  <div className="col-md-6">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </div>
                  <div className="col-md-6">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
