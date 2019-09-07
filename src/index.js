import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navbar";
import CartDetails from "./cartdetails";
import JobDetails from "./jobdetails";

ReactDOM.render(<NavBar />, document.querySelector("#navBar"));
ReactDOM.render(<CartDetails />, document.querySelector("#cartDetails"));
ReactDOM.render(<JobDetails />, document.querySelector("#jobDetails"));
