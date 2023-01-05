import { Button, Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

import styles from "../styles/Home.module.scss";
import Logo from "./Logo";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Row className="text-light m-0">
          <Col className="text-center">
            <a className="navbar-brand fw-bold brand" href="#">
              F&D
            </a>
            <div className="mt-3">
              <a href="" className="me-3">
                <FaFacebook size={26} />
              </a>
              <a href="">
                <FaInstagram size={26} />
              </a>
            </div>
            <div className="mt-3">
              <a href="" className="me-3">
                {" "}
                <FaRegEnvelope size={25} />
              </a>
              <a href="">
                <FaTwitter size={26} />
              </a>
            </div>
          </Col>
          <Col>
            <h6 className="fw-bold">Our Products</h6>
            <div className="list-group list-group-flush">
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                Support
              </a>
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                Guide
              </a>
            </div>
          </Col>
          <Col>
            <h6 className="fw-bold">Terms & Policies</h6>
            <div className="list-group">
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                Privacy Policy
              </a>
            </div>
          </Col>
          <Col>
            <h6 className="fw-bold">Company</h6>
            <div className="list-group">
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                Home
              </a>
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                About us
              </a>
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                Contact us
              </a>
            </div>
          </Col>
          <Col>
            <h6 className="fw-bold">Contact</h6>
            <div className="list-group">
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                +91-1234567890
              </a>
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                example@gm.com
              </a>
            </div>
          </Col>
          <Col>
            <h6 className="fw-bold">Food Delivery</h6>
            <div className="list-group">
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                KFC Delivery
              </a>
              <a
                href="#"
                className="border-0 px-0 list-group-item list-group-item-action bg-transparent"
              >
                Bungo Tanjung Delivery
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mx-0 mt-5 pt-5 text-center">
          <Col>
          
          <div className="text-light">
            Powered by { <div className="ms-2" > <Logo /> </div>}
          </div>
            </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
