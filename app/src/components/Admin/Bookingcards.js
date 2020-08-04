import React, { useState, useEffect } from "react";

function Bookingcards({ data }) {
  const [downloadDetails, setDownloaddetails] = useState();

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

  return (
    <>
      <div className="container my-3 my-sm-4 text-dark pb-5">
        <h1 className="mb-5 text-center text-white">Bookings</h1>
        <div className="row">
          {data.map((bookings, key) => (
            <div className="col-12 col-md-4 mb-4">
              <div key={key} className="card card-outline-danger text-center guestbooks">
                <div className="card-header text-white bg-danger">
                  <h4>{bookings.Price}</h4>
                </div>

                <ul key={key} className="list-group small text-center">
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
                  <button type="button" className="download btn btn-danger btn-lg" onClick={download}>
                    Download Invoice
                  </button>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bookingcards;
