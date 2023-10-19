import React, { Component } from "react";
import $ from "jquery";
export default class Contact extends Component {
  componentDidMount() {
    $("input").on("input", function () {
      if ($(this)[0].value.length !== 0) {
        $($(this)[0]).prev().addClass("top-0");
      } else {
        $($(this)[0]).prev().removeClass("top-0");
      }
    });
  }

  render() {
    return (
      <>
        <div className="contact py-5">
          <div className="container">
            <div className="secondaryColor text-center">
              <h1 className="py-3 text-uppercase fw-bold">Contact Section</h1>

              <p className="d-flex align-items-center justify-content-center">
                <span className="divider mainBackground "></span>
                <i className="fa-solid fa-star mx-3"></i>
                <span className="divider mainBackground"></span>
              </p>
            </div>

            <form className="w-75 mx-auto py-5">
              <div>
                {" "}
                <label htmlFor="userName" className="mb-2">
                  User Name :
                </label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userName"
                  id="userName"
                />
              </div>
              <div>
                <label htmlFor="userAge" className="mb-2">
                  User Age :
                </label>
                <input
                  type="number"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userAge"
                  id="userAge"
                />
              </div>
              <div>
                <label htmlFor="userEmail" className="mb-2">
                  User Email :
                </label>
                <input
                  type="email"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userEmail"
                  id="userEmail"
                />
              </div>
              <div>
                <label htmlFor="userPassword" className="mb-2">
                  User Password :
                </label>
                <input
                  type="password"
                  className="form-control border-0 border-bottom rounded-0 mb-4"
                  placeholder="userPassword"
                  id="userPassword"
                />
              </div>
              <button className="btn contactBackground mt-3" type="button">Send Message</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
