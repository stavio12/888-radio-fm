import React, { useState, useEffect } from "react";
import firebase from "firebase";
import firebaseConfig from "../../Firebase";
import UserData from "./Userdata";

function ProductionPage({ user }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [genre, setGenre] = useState();
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [uploading, setUploading] = useState(false);

  const db = firebase.firestore();

  function book(e) {
    e.preventDefault();
    //Uploading file into firebase cloud storage
    const sendBooking = firebase.storage().ref("Production/" + user);

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

    var storage = firebase.storage().ref("Production/" + user);
    //get file url and uploading all details into firebase realtime database
    storage.getDownloadURL().then(async (url) => {
      const docRef = db.collection("Production").doc("Bookings");

      //Uploading data intpo fireStore dbs
      await docRef.collection("Details").add({
        url: url,
        Genre: genre,
        Name: name,
        Phone: phone,
        Email: email,
        File_Name: file.name,
        Price: price,
        Status: false,
        uid: user,
      });

      // firebase
      //   .database()
      //   .ref("Production/" + `${user}`)
      //   .push({
      //     url: url,
      //     Genre: genre,
      //     Name: name,
      //     Phone: phone,
      //     Email: email,
      //     File_Name: file.name,
      //     Price: price,
      //     Status: false,
      //   });
    });

    document.querySelector("form").reset();
  }

  return (
    <>
      <h3 className="text-center text-white">Production</h3>
      <div className="container pt-5 mt-5 text-white">
        <div className="row">
          <form onSubmit={book}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input type="text" className="form-control" id="inputEmail4" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Email</label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="inputPassword4" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputAddress">Phone #</label>
                <input type="tel" className="form-control" onChange={(e) => setPhone(e.target.value)} id="inputAddress" placeholder="000-020-0000" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Genre</label>
                <select id="inputState" className="form-control" defaultValue={"DEFAULT"} onChange={(e) => setGenre(e.target.value)}>
                  <option value="DEFAULT">Choose...</option>
                  <option>Pop</option>
                  <option>Gospel</option>
                  <option>AfroBeats</option>
                  <option>Hip-Pop</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="custom-file mt-5">
                  <input type="file" className="custom-file-input" id="validatedInputGroupCustomFile" accept=".jpg,.mp4,.mp3" required onChange={(e) => setFile(e.target.files[0])} />
                  <label className="custom-file-label" htmlFor="validatedInputGroupCustomFile">
                    {file.name ? file.name : "Choose file..."}
                  </label>
                </div>
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="inputState">Package</label>
                <select id="inputState" className="form-control" defaultValue={"DEFAULT"} onChange={(e) => setPrice(e.target.value)}>
                  <option value="DEFAULT">Choose...</option>
                  <option>Personal</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>

            {/* Toggling between Submit button and Uploading button when the file starts and finishes uploading */}

            <button type="submit" className={uploading ? "d-none" : "btn btn-primary btn-lg offset-4 my-3"}>
              submit
            </button>

            <button className={uploading ? "btn btn-primary  offset-4 my-3" : "d-none"} type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Uploading Please wait...
            </button>
          </form>

          <div className="col-12 col-md-6 px-5">
            <h3 className="font-weight-bolder">Why Work With Us</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicit udin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
          </div>
        </div>
      </div>

      <UserData user={user} />

      <hr className="border-warning" />
    </>
  );
}

export default ProductionPage;
