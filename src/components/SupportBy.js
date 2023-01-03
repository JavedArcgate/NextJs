import React from "react";
import SupportCarousalData from "../utils/SupportCarousalData.json"
import { Row, Col } from "react-bootstrap";


var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,
      }
  },
};

export default function SupportBy() {
  return (
    <section className="container py-5">
      <Row>
        <Col lg={12} className="text-center"><small className="text-muted">Support by:</small></Col>
      </Row>
      <OwlCarousel
        loop
        autoplay={true}
        autoplaytimeout={100}
        autoplaySpeed={6000}
        dots={true}
        nav={true}
        autoplayHoverPause={true}
        center={false}
        items={5}
        stagePadding={0}
        {...options}
        className="SupportBy"
      >
          {SupportCarousalData.map((data, index) => (
            <div className="mx-3  my-lg-1 my-sm-3 my-3" key={index}>
              <img className="img-fluid px-5" src={data.image} alt={data.title} title={data.title} />
            </div>
          ))}
      </OwlCarousel>
    </section>
  );
}