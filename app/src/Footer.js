import React, { useEffect } from "react";

function Footer() {
  return (
    <>
      {" "}
      <footer className="footer text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-2 offset-md-1">
              <div>
                <h3 className="border-bottom">Locations</h3>
                <ul className="list-unstyled">
                  <li>Berlin</li>
                  <li>Bucharest</li>
                  <li>London</li>
                  <li>Budapest</li>
                  <li>Tel Aviv</li>
                  <li>Moscow</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 offset-md-1">
              <div>
                <h3 className="border-bottom">Top Shows</h3>
                <ul className="list-unstyled">
                  <li>88,8 Weekley Chart</li>
                  <li>Transistions - John Digweed</li>
                  <li>Who`s On Top? with John Doe</li>
                  <li>88,8 News</li>
                  <li>Electronic Worriors</li>
                  <li>Moscow</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 offset-md-1">
              <div>
                <h3 className="border-bottom">Blog</h3>
                <ul className="list-unstyled">
                  <li>5 Things to know when you attend a music festival.</li>
                  <li>Continue Reading</li>

                  <li>5 Things to know when you attend a music festival.</li>
                  <li>Continue Reading</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 offset-md-1">
              <div>
                <h3 className="border-bottom">Contact</h3>
                <ul className="list-unstyled">
                  <li>
                    A:
                    <address>4111 Birch Street, Berlin</address>
                  </li>
                  <li>
                    T:<a href="tel:+0000000000">000-000-000</a>
                  </li>
                  <li>
                    E:<a href="mailto:example@888.com">example@888.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
