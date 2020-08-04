import React, { useState, useEffect } from "react";
import firebase from "../../Firebase";
import Loading from "../production/Loading";
import Bookingcards from "./Bookingcards";
import UserBookings from "./UserBookings";

function AdminWorkspace() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  // const [key, setKey] = useState("Bookings/");
  const [toggle, setToggle] = useState(false);
  const [ID, setID] = useState(null);

  useEffect(() => {
    //Getting booked data from database
    firebase
      .database()
      .ref("Bookings/")
      .once("value", (snapshot) => {
        const data = snapshot.val();
        const prodData = userData(data);
      });
  });

  const userData = (firebaseData) => {
    //Setting data into an array
    const userDetails = [];

    for (let key in firebaseData) {
      userDetails.push({ key, ...firebaseData[key] });
    }

    setData(userDetails);
    setloading(false);

    return userDetails;
  };

  function guest() {
    setToggle(false);
  }

  function users() {
    // setKey("Production/");
    setToggle(true);
  }

  var ClearTime;
  if (loading) return <Loading />;

  return (
    <>
      <div className="container text-white text-center form-row">
        <div className="col">
          <h3>Guest</h3>
          <button className="btn btn-lg btn-info" onClick={guest}>
            Bookings
          </button>
        </div>
        <div className="col">
          <h3>Production</h3>
          <button className="btn btn-lg btn-info" onClick={users}>
            Bookings
          </button>
        </div>
      </div>
      {toggle ? <UserBookings data={data} /> : <Bookingcards data={data} />}
    </>
  );
}

export default AdminWorkspace;
