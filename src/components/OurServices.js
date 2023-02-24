import React from "react";
import ServicesCarousalData from "../utils/ServicesCarousalData.json";
import { Row, Col } from "react-bootstrap";

const mainTitle = "— Our Services —";
const subTitle = "Our serve just for you";

export default function OurServices() {
  return (
    <section className="my-5 container align-items-center justify-content-between mt-4 mb-5 pb-5">
      <Row>
        <Col lg={12} className="text-center mb-2">
          <small className="brand-color">{mainTitle}</small>
        </Col>
        <Col lg={12} className="text-center">
          <h3 className="fw-bold">{subTitle}</h3>
        </Col>
      </Row>
      <Row className="my-5">
        {ServicesCarousalData.slice(0, 3).map((data, index) => (
          <Col lg={4} md={12} className="text-center px-5" key={index}>
            <img
              className="img-fluid px-5"
              src={data.image}
              alt={data.title}
              title={data.title}
            />
            <h3 className="fw-bold my-4">{data.title}</h3>
            <h5 className="text-muted">{data.description}</h5>
          </Col>
        ))}
      </Row>
    </section>
  );
}
