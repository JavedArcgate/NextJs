import React from "react";
import FoodCommentsData from "../utils/FoodCommentsData.json";
import { Row, Col } from "react-bootstrap";
import { LR } from "../constants/svgs"

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
import Ratings from "./Rating";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  navText: LR(),
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const mainTitle = "— What they are say —";
const subTitle = "What they are says about us";

export default function FoodCmns() {
  return (
    <section className="container py-5 they-says">
      <OwlCarousel
        loop
        autoplay={false}
        autoplaytimeout={100}
        autoplaySpeed={6000}
        dots={false}
        nav={true}
        autoplayHoverPause={true}
        center={false}
        items={5}
        stagePadding={0}
        {...options}
      >
        {FoodCommentsData.map((data, index) => {
          let prev =
            index == 0
              ? FoodCommentsData[FoodCommentsData.length - 1]
              : FoodCommentsData[index - 1];
          let next =
            index == FoodCommentsData.length - 1
              ? FoodCommentsData[0]
              : FoodCommentsData[index + 1];
          // console.log(prev, "PREVVVVVVVV");
          return (
            <div className="px-2" key={index}>
              <Row>
                <Col lg={6}>
                  <div className="d-flex justify-content-center">
                    <img
                      className=""
                      style={{ width: 400, height: 400, objectFit: "cover" }}
                      src={data.dish_pic}
                      alt={data.title}
                      title={data.title}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={12} className="mb-2">
                      <small className="brand-color">{mainTitle}</small>
                    </Col>
                    <Col lg={12} className="pe-5">
                      <h1 className="fw-bold pe-5">{subTitle}</h1>
                    </Col>
                    <Col>
                      <div className="d-flex align-items-center mt-2">
                        <img
                          className="rounded-circle me-3"
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                          }}
                          src={data.user_pic}
                          alt={data.title}
                          title={data.title}
                        />
                        <div>
                          <h4 className="fw-bold mb-1">{data.name}</h4>
                          <h6 className="text-muted">{data.category}</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <h6 className="text-muted">{'"' + data.comment + '"'}</h6>
                      <h5 className="d-flex">
                        <span style={{ marginTop: "1", borderWidth: "2" }}>
                          {data.rating}
                        </span>
                        <Ratings rating={data.rating} />
                      </h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          );
        })}
      </OwlCarousel>
    </section>
  );
}
