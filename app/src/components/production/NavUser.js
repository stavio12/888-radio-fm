import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import firebase from "firebase";
import firebase from "./../../Firebase";

function NavUser({ user }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link to="/" className="navbar-brand">
          <img src="https://colorlib.com/preview/theme/eighty8/img/logo-big.png" className="brand" />{" "}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto text-md-center text-center">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/booking" className="nav-link">
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/production" className="nav-link">
                Production
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <img src={user.photoUrl} alt="Display Picture" className="rounded-circle userPic border border-warning" alt="" />
            </li>
            <li className="nav-item text-center ml-3 mt-md-2">
              <h5 className="text-white">{user.displayName}</h5>
            </li>
            <button
              className="btn btn-warning ml-5 text-md-center offset-5 offset-lg-0 font-weight-bolder"
              onClick={() => {
                firebase.auth().signOut();
                window.location.href = "/";
              }}
            >
              SignOut
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavUser;
