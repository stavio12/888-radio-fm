import React, { useState, useEffect } from "react";
import firebase from "firebase";
import firebaseConfig from "../../Firebase";

import Loading from "./Loading";

function Userdata({ user }) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [downloadDetails, setDownloaddetails] = useState();

  const db = firebase.firestore();

  const showUserBooks = (bookings) => {
    //Compare current user ID to bookings.uid
    if (user == bookings.uid) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    downloadDetails;
    const dataRef = db.collection("Production/Bookings/Details");
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
  }, [data]);

  function download(e) {
    setDownloaddetails("");

    if (e.target.classList.contains("download")) {
      //Printing details which has been printed onto the page from the databse into state.
      const file = e.target.parentElement;
      const userD = {
        Name: file.querySelector(".list-group-item .name").textContent,
        Email: file.querySelector(".list-group-item .email").textContent,
        Phone: file.querySelector(".list-group-item .phone").textContent,
        Price: file.querySelector(".list-group-item .price").textContent,
        Genre: file.querySelector(".list-group-item .genre").textContent,
        File_Name: file.querySelector(".list-group-item .fileName").textContent,
        URL: file.querySelector(".list-group-item a").href,
      };

      setDownloaddetails(userD);
    }

    // Making file Link available for download
    if (downloadDetails !== undefined) {
      const element = document.createElement("a");
      const file = new Blob(
        [
          `Name:${downloadDetails.Name}\n Email: ${downloadDetails.Email} \n Phone: ${downloadDetails.Phone} \n
        Price: ${downloadDetails.Price} \n Genre: ${downloadDetails.Genre} \n
        File_Name: ${downloadDetails.File_Name}\n URL: ${downloadDetails.URL}`,
        ],
        { type: "filename" }
      );
      element.href = URL.createObjectURL(file);
      element.download = "invoice.txt";
      document.body.appendChild(element);
      element.click();
    }
  }

  if (loading) return <Loading />;

  return (
    <>
      <div className="container my-3 my-sm-4 text-dark pb-5">
        <h1 className="mb-5 text-center text-white">Bookings</h1>
        <div className="row">
          {data.map((bookings) => {
            const user = showUserBooks(bookings);
            // Print out  current user's bookings ONLY!
            if (user)
              return (
                <div key={bookings.id} className="col-12 col-md-4 mb-4">
                  <div className="card card-outline-danger text-center">
                    <div className={bookings.Status ? "card-header text-white bg-success" : "card-header text-white bg-danger"}>
                      <h2>{bookings.Price}</h2>
                    </div>
                    <div className="card-block text-center">
                      {/* Toggling between Completed files and pending file */}
                      <p className={bookings.Status ? "card-text text-success" : "card-text text-danger"}>{bookings.Status ? "Completed" : "Pending"}</p>
                    </div>
                    <ul className="list-group small text-center">
                      <li className=" list-group-item">
                        {" "}
                        Name: <span className="name">{bookings.Name}</span>{" "}
                      </li>
                      <li className=" list-group-item">
                        {" "}
                        Email: <span className="email">{bookings.Email}</span>{" "}
                      </li>
                      <li className=" list-group-item">
                        {" "}
                        Phone#: <span className="phone">{bookings.Phone}</span>{" "}
                      </li>
                      <li className=" list-group-item">
                        {" "}
                        Package Plan: <span className="price"> {bookings.Price}</span>{" "}
                      </li>
                      <li className=" list-group-item">
                        {" "}
                        Genre: <span className="genre">{bookings.Genre}</span>{" "}
                      </li>
                      <li className=" list-group-item">
                        {" "}
                        File Name: <span className="fileName">{bookings.File_Name}</span>{" "}
                      </li>
                      <li className=" list-group-item">
                        URL: <a href={bookings.url}>Download</a>
                      </li>
                      <button type="button" className={bookings.Status ? "download btn btn-success btn-lg" : "download btn btn-danger btn-lg"} onClick={download}>
                        Download Invoice
                      </button>
                    </ul>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
      ;
    </>
  );
}

export default Userdata;
