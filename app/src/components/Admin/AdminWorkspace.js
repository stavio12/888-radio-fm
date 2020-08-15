import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import Loading from "../production/Loading";
import Bookingcards from "./Bookingcards";
import UserBookings from "./UserBookings";

function AdminWorkspace() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    //Getting booked data from database
    const dataRef = db.collection(`Production/Guest/Details`);
    const data = [];

    const fetchData = async () => {
      const doc = await dataRef.get();
      doc.forEach((docs) => {
        data.push({
          id: docs.id,
          ...docs.data(),
        });
      });
      setData(data);
      setloading(false);
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="container text-white text-center form-row">
        <div className="col">
          <h3>Guest</h3>
          <button className="btn btn-lg btn-info" onClick={(e) => setToggle(false)}>
            Bookings
          </button>
        </div>
        <div className="col">
          <h3>Production</h3>
          <button className="btn btn-lg btn-info" onClick={(e) => setToggle(true)}>
            Bookings
          </button>
        </div>
      </div>
      {toggle ? <UserBookings /> : <Bookingcards data={data} />}
    </>
  );
}

export default AdminWorkspace;
