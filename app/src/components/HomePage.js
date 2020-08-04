import React, { useEffect } from "react";

function HomePage() {
  return (
    <>
      {/* <!-- Exclusive interviews --> */}

      <section id="interview" className="text-white">
        <div className="container">
          {/* <!-- Fm cities --> */}
          <div className="row text-white pb-5">
            <div className=" pb-5 text-center">
              <div className="col-xl d-none d-md-inline">
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" className="" />
                berlin
              </div>
              <div className=" col-xl d-none d-md-inline">
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" className="" /> Bucharest
              </div>
              <div className=" col-xl d-none d-md-inline">
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" className="" /> London
              </div>
              <div className=" col-xl d-none d-md-inline">
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" className="" /> Bucharest
              </div>
              <div className=" col-xl d-none d-md-inline">
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" className="" /> Tel Aviv
              </div>
              <div className=" col-xl d-none d-md-inline">
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" className="" /> Moscow
              </div>
            </div>
          </div>

          {/* <!-- SlideShow --> */}
          <div className="slideshow-container ">
            <div className="w3-content w3-section">
              <div className="mySlides">
                <h3>UP NEXT</h3>
                <h3>DJ Khalid Exclusive Interview</h3>
              </div>

              <div className="mySlides">
                <h3>UP NEXT</h3>
                <h3>David Guetta Exclusive Interview</h3>
              </div>

              <div className="mySlides">
                <h3>UP NEXT</h3>
                <h3>DJ Snake Exclusive Track</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center">
            <div className="col-8 col-md-4 offset-sm-2 offset-md-0">
              <div className="dj mb-5 img-responsive">
                {/* <img id="ourdj" src="https://colorlib.com/preview/theme/eighty8/img/promo/1.jpg" className="img-responsive" alt="..." /> */}
                <div className="my-5 carousel-caption  ">
                  <h1 className="my-5 offset-5 offset-sm-0 ">Our DJ`s</h1>
                </div>
              </div>{" "}
            </div>
            <div className="col-8 col-md-4 offset-sm-2 offset-md-0">
              <div className="live  mb-5 img-responsive">
                {/* <img id="ourdj" src="https://colorlib.com/preview/theme/eighty8/img/promo/2.jpg" className="img-responsive" alt="..." /> */}
                <div className="my-5  carousel-caption ">
                  <h1 className="my-5 offset-5 offset-sm-0 ">Live Streams</h1>
                </div>
              </div>
            </div>{" "}
            <div className="col-8 col-md-4 offset-sm-2 offset-md-0">
              <div className="blur  mb-5 img-responsive">
                {/* <img id="ourdj"  className="img-responsive" alt="..." /> */}

                <div className="my-5   carousel-caption ">
                  <h1 className="my-5 offset-5 offset-sm-0">Events</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Posts --> */}
      <section id="stream " className="pt-5 mt-5">
        <h1 className="text-center text-white pb-5 border-bottom ">Lastest Podcast</h1>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" width="180" height="734" src="https://www.youtube.com/embed/R0XeaywZ44M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      {/* <!-- Charts --> */}
      <section id="chart" className="pt-5 mt-5">
        <h1 className="text-center text-white pb-5">Charts</h1>
        <img src="https://colorlib.com/preview/theme/eighty8/img/logo-big.png" alt="" />
      </section>

      <div className="list-inline text-center pt-5">
        <a href="#home">
          <i className="fa fa-arrow-up text-dark" aria-hidden="true">
            <br />
            <small> Move To Top</small>
          </i>
        </a>
      </div>
    </>
  );
}

export default HomePage;
