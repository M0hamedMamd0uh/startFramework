import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
export default class Navbar extends Component {
  componentDidMount() {
    // for get path from url and select link
    for (let i = 0; i < $(".nav-link").length; i++) {
      if (window.location.pathname === $($(".nav-link")[i]).attr("href")) {
        $($($(".nav-link")[i])[0]).addClass("navLinkStyle");
      }
    }

    // to make event on navbar links when click it => select link
    $(".nav-link").on("click", function () {
      $(".nav-link").removeClass("navLinkStyle");
      $(this).addClass("navLinkStyle");
    });

    // to remove style from nav-link
    $(".navbar-brand").on("click", function () {
      $(".nav-link").removeClass("navLinkStyle");
    });

    // for make animation when scroll document 
    $(document).on("scroll", function () {
      if ($(".navbar").offset().top === 0) {
        $(".navbar").addClass("py-4");
      } else {
        $(".navbar").removeClass("py-4");
      }
    });
  }

  render() {
    return (
      <>
        <nav className="mainBackground  navbar navbar-expand-lg py-4 fixed-top">
          <div className="container">
            <Link
              className="navbar-brand text-white text-uppercase fw-bold fs-2"
              to="home"
            >
              Start Framework
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars text-white"></i>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fw-semibold fs-5 text-white text-center "
                    aria-current="page"
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fw-semibold fs-5 text-white text-center "
                    to="Portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fw-semibold fs-5 text-white text-center "
                    to="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
