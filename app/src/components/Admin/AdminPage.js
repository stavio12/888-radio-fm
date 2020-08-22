import React, { useState, useEffect } from "react";
// import firebase from "firebase";
import firebase from "../../Firebase";

import AdminNav from "./AdminNav";
import AdminWorkspace from "./AdminWorkspace";
import UserLogin from "../../Nav";

function useAuth() {
  const [user, setUser] = useState();

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        //verifying if UID is same as the Admin
        if ("753KpDrZoFYadK50hvFhwxzxB4J2" === firebaseUser.uid) {
          setUser(firebaseUser.uid);
        } else {
          setUser(null);
          alert("This Page is for Admins only!");
          window.location.href = "/";
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return user;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const siginAdmin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        setMessage(error.message);
        // ...
      });
  };
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <form onSubmit={siginAdmin} className="text-white mx-auto text-center justify-content-center border border-warning p-5">
            <div className="form-group ">
              <label htmlFor="formGroupExampleInput">Email</label>
              <input type="email" className="form-control" id="formGroupExampleInput" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Password</label>
              <input type="password" className="form-control" id="formGroupExampleInput2" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <h6>
              <small className="text-danger">{message}</small>
            </h6>
            <button type="submit" className="btn btn-info">
              Login
            </button>
            {/* <button type="submit" className="btn btn-info">Create Admin</button> */}
          </form>{" "}
        </div>
      </div>
    </>
  );
}

function AdminPage() {
  const Admin = useAuth();
  //Toggling between user Nav and admin nav when user logins in
  if (Admin) {
    Admin ? <UserLogin /> : <AdminNav />;
  }
  return Admin ? <AdminWorkspace /> : <Login />;
}

export default AdminPage;
