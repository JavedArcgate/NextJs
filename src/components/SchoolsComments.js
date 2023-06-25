import React from "react";
import SchoolsCommentsData from "../utils/SchoolsCommentsData.json";
import { Row, Col } from "react-bootstrap";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
import { data } from "jquery";
import { LR } from "../constants/svgs";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  navText:LR(),
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
const subTitle = "Comments from schools";

export default function SchoolsComments() {
  return (
    <section className="container py-5">
      <Row>
        <Col lg={12} className="text-center mb-2">
          <small className="brand-color">{mainTitle}</small>
        </Col>
        <Col lg={12} className="text-center">
          <h3 className="fw-bold">{subTitle}</h3>
        </Col>
      </Row>
      <OwlCarousel
        loop
        autoplay={false}
        autoplaytimeout={100}
        autoplaySpeed={6000}
        dots={true}
        nav={true}
        autoplayHoverPause={true}
        center={false}
        items={5}
        stagePadding={0}
        {...options}
        className="Comments"
      >
        {SchoolsCommentsData.map((data, index) => {
          let prev =
            index == 0
              ? SchoolsCommentsData[SchoolsCommentsData.length - 1]
              : SchoolsCommentsData[index - 1];
          let next =
            index == SchoolsCommentsData.length - 1
              ? SchoolsCommentsData[0]
              : SchoolsCommentsData[index + 1];
          console.log(prev, "PREVVVVVVVV");
          return (
            <div className="px-2" key={index}>
              <div className="text-center position-relative d-flex align-items-stretch  animate__animated animate__fadeIn">
                <div className="d-none d-sm-flex flex-column justify-content-between align-items-center">
                  <img
                    className="rounded-circle"
                    style={{ width: 120, height: 120, objectFit: "cover" }}
                    src={prev.dish_pic}
                    alt={prev.title}
                    title={prev.title}
                  />
                  <div
                    className="d-flex position-relative"
                    style={{ width: 430 }}
                  >
                    <div
                      style={{ right: -90, bottom: 0 }}
                      className="d-flex position-absolute"
                    >
                      <div
                        className="shadow-sm bg-body mx-3 p-3 border border-light text-start"
                        style={{ borderRadius: "1rem" }}
                      >
                        <h4 className="fw-bold mb-1">{prev.name}</h4>
                        <h6 className="mb-1 text-muted">{prev.category}</h6>
                        <p className="mb-0">{prev.comment}</p>
                      </div>
                      <img
                        className="rounded-circle border border-5 border-muted"
                        style={{ width: 140, height: 140, objectFit: "cover" }}
                        src={prev.user_pic}
                        alt={prev.title}
                        title={prev.title}
                      />
                    </div>
                  </div>
                </div>

                <img
                  className="rounded-circle "
                  style={{ width: 400, height: 400, objectFit: "cover" }}
                  src={data.dish_pic}
                  alt={data.title}
                  title={data.title}
                />

                <div className="d-none d-sm-flex flex-column justify-content-between align-items-center">
                  <div
                    className="d-flex position-relative"
                    style={{ width: 430 }}
                  >
                    <div
                      style={{ left: -90, top: 0 }}
                      className="d-flex position-absolute"
                    >
                      <img
                        className="rounded-circle border border-5 border-muted"
                        style={{ width: 140, height: 140, objectFit: "cover" }}
                        src={next.user_pic}
                        alt={next.title}
                        title={next.title}
                      />
                      <div
                        className="shadow-sm bg-body mx-3 p-3 border border-light text-start"
                        style={{ borderRadius: "1rem" }}
                      >
                        <h4 className="fw-bold mb-1">{next.name}</h4>
                        <h6 className="mb-1 text-muted">{next.category}</h6>
                        <p className="mb-0">{next.comment}</p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="rounded-circle"
                    style={{ width: 120, height: 120, objectFit: "cover" }}
                    src={next.dish_pic}
                    alt={next.title}
                    title={next.title}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </section>
  );
}
