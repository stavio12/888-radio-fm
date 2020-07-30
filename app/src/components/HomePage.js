import React, { useEffect } from "react";

function HomePage() {
  return (
    <>
      {/* <!-- Exclusive interviews --> */}

      <section id="interview" className="text-white">
        <div className="container">
          {/* <!-- Fm cities --> */}
          <div className="row text-white pb-5">
            <div className=" pb-5">
              <div className="col-lg-6 col-xl d-none d-md-inline">
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" alt="" />
                berlin
              </div>
              <div className="col-lg-6 col-xl d-none d-md-inline">
                {" "}
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" alt="" />
                Bucharest
              </div>
              <div className="col-lg-6 col-xl d-none d-md-inline">
                {" "}
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" alt="" />
                London
              </div>
              <div className="col-lg-6 col-xl d-none d-md-inline">
                {" "}
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" alt="" />
                Bucharest
              </div>
              <div className="col-lg-6 col-xl d-none d-md-inline">
                {" "}
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" alt="" />
                Tel Aviv
              </div>
              <div className="col-lg-6 col-xl d-none d-md-inline">
                {" "}
                <img src="https://colorlib.com/preview/theme/eighty8/img/logo-small.png" alt="" />
                Moscow
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
            <div className="col-md-4">
              <img id="ourdj" src="https://colorlib.com/preview/theme/eighty8/img/promo/1.jpg" className="img-responsive" alt="..." />
              <div className="my-5 carousel-caption  text-danger">
                <h1 className="my-5 ">Our DJ`s</h1>
              </div>
            </div>

            <div className="col-md-4">
              <img id="ourdj" src="https://colorlib.com/preview/theme/eighty8/img/promo/2.jpg" className="img-responsive" alt="..." />
              <div className="my-5  carousel-caption text-danger">
                <h1 className="my-5 ">Live Streams</h1>
              </div>
            </div>
            <div className="col-md-4">
              <img id="ourdj" src="https://colorlib.com/preview/theme/eighty8/img/promo/3.jpg" className="img-responsive" alt="..." />

              <div className="my-5  carousel-caption text-danger">
                <h1 className="my-5 ">Events</h1>
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
