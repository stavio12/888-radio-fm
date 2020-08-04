import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      {" "}
      <footer className="footer text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-2 offset-1">
              <div>
                <h3 className="border-bottom">Locations</h3>
                <ul className="list-unstyled">
                  <li classNam="py-2">Berlin</li>
                  <li classNam="py-2">Bucharest</li>
                  <li classNam="py-2">London</li>
                  <li classNam="py-2">Budapest</li>
                  <li classNam="py-2">Tel Aviv</li>
                  <li classNam="py-2">Moscow</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 offset-1">
              <div>
                <h3 className="border-bottom">Top Shows</h3>
                <ul className="list-unstyled">
                  <li className="py-1">
                    <small className="bg-warning rounded-circle text-dark p-1">1</small> 88,8 Weekley Chart
                  </li>
                  <li className="py-1">
                    <small className="bg-warning rounded-circle text-dark p-1">2</small> Transistions - John Digweed
                  </li>
                  <li className="py-1">
                    <small className="bg-warning rounded-circle text-dark p-1">3</small> Who`s On Top? with John Doe
                  </li>
                  <li className="py-1">
                    <small className="bg-warning rounded-circle text-dark p-1">4</small> 88,8 News
                  </li>
                  <li className="py-1">
                    <small className="bg-warning rounded-circle text-dark p-1">5</small> Electronic Worriors
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 offset-1">
              <div>
                <h3 className="border-bottom">Blog</h3>
                <ul className="list-unstyled">
                  <div className="pb-5">
                    <img id="ourdj" src="https://colorlib.com/preview/theme/eighty8/img/promo/2.jpg" className="img-responsive float-left mr-2" alt="..." />
                    <li classNam="py-2">5 Things to know when you attend a music festival</li>
                    <li classNam="py-2">
                      <a href="#" className="text-warning">
                        Continue Reading
                      </a>
                    </li>
                  </div>

                  <div className="pb-5">
                    <img id="ourdj" src="https://colorlib.com/preview/theme/eighty8/img/promo/1.jpg" className="img-responsive float-left mr-2" alt="..." />

                    <li classNam="py-2">5 Things to know when you attend a music festival.</li>
                    <li classNam="py-2">
                      <a href="#" className="text-warning">
                        Continue Reading
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 offset-1">
              <div>
                <h3 className="border-bottom">Contact</h3>
                <ul className="list-unstyled">
                  <li classNam="py-2">
                    <span className="text-warning">A:</span>
                    <address>4111 Birch Street, Berlin</address>
                  </li>
                  <li classNam="py-2">
                    <span className="text-warning">T:</span>
                    <a href="tel:+0000000000">000-000-000</a>
                  </li>
                  <li classNam="py-2">
                    <span className="text-warning">E:</span>
                    <a href="mailto:example@888.com">example@888.com</a>
                  </li>
                  <h6>
                    <Link to="/admin" className="text-white">
                      Admin Login
                    </Link>
                  </h6>{" "}
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
