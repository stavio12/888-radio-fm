import React, { useEffect } from "react";

function About() {
  return (
    <>
      <h2 className="text-white text-center font-weight-bolder pb-5 pt-5">Product And Services</h2>

      <div className="embed-responsive embed-responsive-16by9  pb-5">
        <iframe className="embed-responsive-item" width="789" height="444" src="https://www.youtube.com/embed/Dp5juGm2LGE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <section className="pt-5 text-white">
        <div className="container pt-5">
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-2 offset-lg-0">
              <img src="https://colorlib.com/preview/theme/eighty8/img/about-1.jpg" className="img-responsive" srcSet="" />
            </div>

            <div className="col-12 col-lg-6 py-5 px-5">
              <h4 className="font-weight-bolder offset-md-2 offset-xl-0 ">Strategic Surveys & Perceptual Studies</h4>
              <p className="offset-md-2 offset-xl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicitudin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, vel aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 text-white d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 py-5 px-5">
              <h4 className="font-weight-bolder ">Strategic Surveys & Perceptual Studies</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicitudin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, vel aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
            </div>

            <div className="col-12 col-lg-6">
              <img src="https://colorlib.com/preview/theme/eighty8/img/about-1.jpg" className="img-responsive" srcSet="" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 text-white  d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-2 offset-lg-0">
              <img src="https://colorlib.com/preview/theme/eighty8/img/about-1.jpg" className="img-responsive" srcSet="" />
            </div>

            <div className="col-12 col-lg-6 py-5 px-5">
              <h4 className="font-weight-bolder offset-md-2 offset-xl-0 ">Strategic Surveys & Perceptual Studies</h4>
              <p className="offset-md-2 offset-xl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicitudin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, vel aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-md-2 offset-lg-0">
              <img src="https://colorlib.com/preview/theme/eighty8/img/about-1.jpg" className="img-responsive" srcSet="" />
            </div>

            <div className="col-12 col-lg-6 py-5 px-5">
              <h4 className="font-weight-bolder offset-md-2 offset-xl-0 ">Strategic Surveys & Perceptual Studies</h4>
              <p className="offset-md-2 offset-xl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicitudin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, vel aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 text-white">
        <div className="container">
          <div className="row mx-auto text-center">
            <div className="col-12 col-md-4">
              <img src="https://colorlib.com/preview/theme/eighty8/img/services/1.jpg" className="aboutImages" srcSet="" />
              <h4>Why myradiotest?</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicitudin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, vel aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
            </div>

            <div className="col-12 col-md-4">
              <img src="https://colorlib.com/preview/theme/eighty8/img/services/1.jpg" className="aboutImages" srcSet="" />
              <h4>Why myradiotest?</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicitudin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, vel aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
            </div>

            <div className="col-12 col-md-4">
              <img src="https://colorlib.com/preview/theme/eighty8/img/services/1.jpg" className="aboutImages" srcSet="" />
              <h4>Why myradiotest?</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tincidunt ligula. Fusce dictum ullamcorper purus, at elementum sem sollicitudin non. Sed id tristique lacus. Fusce pellentesque dignissim arcu, id hendrerit urna feugiat vitae. Pellentesque viverra aliquet arcu, vel aliquet est commodo quis. Nam tempus, nisl eu maximus viverra, magna quam porta nibh.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
