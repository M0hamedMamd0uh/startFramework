import React, { Component } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      {
        path: "*",
        element: (
          <div className="d-flex justify-content-center align-items-center py-5">
            <h1>Not Found</h1>
          </div>
        ),
      },
    ],
  },
]);

export default class App extends Component {


  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
