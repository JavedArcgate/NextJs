import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import banner from "../../public/images/hero.jpg";
import Image from "next/image";
import CustomerReviewData from "../utils/CustomerReviewData.json";
import { FaStar, FaRegPlayCircle } from "react-icons/fa";
import Link from "next/link";


const HeroSection = () => {
  const review_data =
    CustomerReviewData.customer_reviews[0].reviews_all.reviews;
  const _heading = CustomerReviewData.customer_reviews[0].reviews_all.heading;
  const total_reviews =
    CustomerReviewData.customer_reviews[0].reviews_all.total_reviews;
  const total_rating =
    CustomerReviewData.customer_reviews[0].reviews_all.total_rating;

  return (
    <React.Fragment>
      <Row className="w-100 mt-4 mb-5 topContent">
        <Col xs={12} lg={6}>
          <div className="pe-lg-3">
            {/* <Link href="todays_special">Todays Special12315454 </Link> */}
            <h1 className="fw-bolder px-lg-5 pt-4" style={{ fontSize: "65px" }}>
              Safe Your child's journey starts with us!
            </h1>
            <h3 className="px-lg-5 pt-3 text-muted">
              "Safe, reliable, and flexible school transportation at your fingertips with Sklu Cabs."
            </h3>
            <h3 className="px-lg-5 pt-6 text-muted">
              Let us be your child's journey partner.
            </h3>

            <div className="px-lg-5 pt-4">
              <Button variant="brand rounded-pill px-4 text-light fw-bold">
                DOWNLOAD SKLU
              </Button>
              <Button variant="outline-brand rounded-pill px-4 mx-lg-3 mx-md-3 fw-bold" >
                <FaRegPlayCircle className="color-brand d-none" /> SIGN UP AS DRIVER
              </Button>
              <div className="d-flex py-4 align-items-center my-4 d-none">
                <div>
                  {review_data.map((data, index) => (
                    <img
                      style={{ height: 100, width: 100, objectFit: "cover" }}
                      src={data.image}
                      className={
                        index < [1] ? "rounded-circle" : "rounded-circle ml-30"
                      }
                      key={index}
                    />
                  ))}
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold mb-0">{_heading}</h5>
                  <h6 className="mb-0 d-flex my-2">
                    <FaStar className="text-warning me-2" />
                    {total_rating}
                    <small className="text-muted ms-2">
                      ({total_reviews} Reviews)
                    </small>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} className="text-lg-end">
          <Image src={banner} alt="Picture of the author" />
        
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HeroSection;
