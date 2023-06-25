import React from "react";
import CarousalData from "../utils/CarousalData.json";
import { Row, Col } from "react-bootstrap";
import {LR as LLR } from '../constants/svgs'
const mainTitle = "— Populer Drivers —";
const subTitle = "Experienced drivers with a touch of happiness";

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
// import "../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
// import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import { data } from "jquery";
import Ratings from "./Rating";
import { FaArrowRight } from "react-icons/fa";
// const basePath = '../../public/images'
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});



export default function Slider() {
  const options = {
    navText:  LLR(),
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
      },
    },
  };

  return (
    <section className="container py-5">
      <Row>
        <Col lg={12} className="text-center mb-2">
          {/* <RotaryCircleLogo fill={'#198754'} /> */}
          <small className="brand-color">{mainTitle}</small>
        </Col>
        <Col lg={12} className="text-center">
          <h3 className="fw-bold">{subTitle}</h3>
        </Col>
      </Row>
      <OwlCarousel
        loop
        dots={true}
        nav={true}
        autoplayHoverPause={true}
        center={true}
        items={5}
        stagePadding={0}
        {...options}
      >
        {CarousalData.map((data, index) => (
          <div className="item" key={index}>
            <h4 className="rounded-pill bg-dark bg-opacity-10 fs-5">
              {data.price}
            </h4>
            <img
              style={{ width: 250, height: 180, objectFit: "cover" }}
              src={data.image}
              alt={data.title}
              title={data.title}
            />
            <div className="stars">
              <h3>{data.title}</h3>
              <h5 className="d-flex text-shadow">
                <span style={{ marginTop: "1", borderWidth: "2" }}>
                  {data.rating}
                </span>
                <Ratings rating={data.rating} />
              </h5>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
}
