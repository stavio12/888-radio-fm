import React, { useState, useEffect } from "react";
import { db, store, auth } from "../../Firebase";

function UserBookings() {
  const [downloadDetails, setDownloaddetails] = useState();
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState([]);
  const [file, setFile] = useState("");

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
        ID: file.querySelector(".id").textContent,
        UID: file.querySelector(".uid").textContent,
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

  useEffect(() => {
    //Getting booked data from database
    const dataRef = db.collection(`Production/Bookings/Details`);
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
    };

    fetchData();
  }, []);

  const upload = (e) => {
    if (e.target.classList.contains("upload")) {
      //Printing details which has been printed onto the page from the databse into state.
      const fileD = e.target.parentElement;
      const userid = {
        ID: fileD.querySelector(".id").textContent,
        UID: fileD.querySelector(".uid").textContent,
      };

      const sendBooking = store.ref("Production/" + userid.UID);
      const uploadFile = sendBooking.put(file);
      uploadFile.on(
        "state_changed",
        (snapshot) => {
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploading(true); // setting uploading button on when file start uploading
          if (percentage == 100) {
            setUploading(false); // setting uploading button off when file finishes uploading
          }
        },
        (error) => {
          console.log(error);
        }
      );

      var storage = store.ref("Production/" + userid.UID);
      //get file url and uploading all details into firebase realtime database
      storage.getDownloadURL().then(async (url) => {
        const docRef = db.collection("Production").doc("Bookings");
        //Uploading data intpo fireStore dbs
        await docRef.collection("Details").doc(userid.ID).update({
          File_Name: file.name,
          url: url,
          Status: true,
        });
      });
    }
  };

  return (
    <>
      <div className="container my-3 my-sm-4 text-dark pb-5">
        <h1 className="mb-5 text-center text-white">Bookings</h1>
        <div id="card" className="row">
          {data.map((bookings) => (
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
                  <h3 className="id d-none">{bookings.id}</h3>
                  <h3 className="uid d-none">{bookings.uid}</h3>

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
                  <li className="list-group-item">
                    <input type="file" className="custom-file-input" id="validatedInputGroupCustomFile" accept=".jpg,.mp4,.mp3" required onChange={(e) => setFile(e.target.files[0])} />
                    <label className="custom-file-label" htmlFor="validatedInputGroupCustomFile">
                      {file.name ? file.name : "Choose file..."}
                    </label>

                    <div className={uploading ? "text-center" : "d-none"}>
                      <div className="spinner-border" role="status" /> <br />
                      <span>Uploading Please wait.....</span>
                    </div>
                  </li>
                  {/* Set hide Upload button after admin uploads to user */}
                  <button type="button" className={bookings.Status ? "d-none" : "upload btn btn-secondary pt-3"} onClick={upload}>
                    Upload File{" "}
                  </button>

                  <button type="button" className={bookings.Status ? "download btn btn-success btn-lg" : "download btn btn-danger btn-lg"} onClick={download}>
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

export default UserBookings;
