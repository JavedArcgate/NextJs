// import { Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { Col, Row } from "antd";
import { erEmail, emailRegistered } from "../constants/variables";
import { Button } from "antd";

const NLImage = "./images/eat.png";

// const [email, setEmail] = useState("");
const classes =
  "container align-items-center justify-content-between pt-5 pb-5 bg-brand";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [successMessages, setSuccessMessages] = useState("");

  const handelOnchage = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email) && email !== "") {
      setErrorMessages(erEmail);
      return false;
    } else {
      setErrorMessages("");
      return false;
    }
    return false;
  };

  async function validateEmail() {
    let isValidEmail = true;

    if (email.trim() === "") {
      alert(erEmail);
      setErrorMessages(erEmail);
      disposeError("Error");
      return false;
    }
    emailValidation();
    var GET_result = await fetch(
      "https://62974e128d77ad6f75ff6bc3.mockapi.io/NewsLetter"
    );
    GET_result = await GET_result.json();
    GET_result.forEach((singleUser) => {
      if (email == singleUser.email) {
        isValidEmail = false;
      }
    });
    if (isValidEmail === false) {
      alert("Innnnnnvalidddd.....");
      setErrorMessages(erEmail);
      disposeError("Error");
      return false;
    }
    if (isValidEmail === true) {
      alert("Yay, Its Valid Email.....");
      setSuccessMessages(emailRegistered);
      disposeError("Success");
      return true;
    }
    return isValidEmail;
  }

  async function register() {
    const validEmail = await validateEmail();

    console.log(validEmail, "123456");

    if (validEmail) {
      let userEmail = { email };
      console.log(userEmail, "Userrrrrr.....");

      let result = fetch(
        // "https://62974e128d77ad6f75ff6bc3.mockapi.io/register",
        "https://62974e128d77ad6f75ff6bc3.mockapi.io/NewsLetter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userEmail),
        }
      );
      // console.log(result, "RESULTsssss");
    }
  }

  const disposeError = (errType) => {
    switch (errType) {
      case "Error":
        setTimeout(() => {
          setErrorMessages("");
        }, 10000);
        break;

        case "Success":
          setTimeout(() => {
            setSuccessMessages("");
          }, 10000);

      default:
        break;
    }
  };

  // function disposeError() {
  //   setTimeout(() => {
  //     setErrorMessages("");
  //   }, 10000);
  // }
  // function disposeError(errType) {
  //   switch (errType) {
  //     case "Error":
  //       setTimeout(() => {
  //         setErrorMessages("");
  //       }, 10000);
  //       break;

  //     case "Success":
  //       setTimeout(() => {
  //         setSuccessMessages("");
  //       }, 10000);
  //       break;

  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <section className={classes}>
        <Row>
          <Col span={12}>123456</Col>
          <Col span={12}>789101112</Col>
        </Row>
        <Row className="text-light m-0">
          <Col span={12} className="text-center">
            <img
              className="img-fluid p-5"
              src={NLImage}
              alt={"data.title"}
              title={"data.title"}
            />
          </Col>
          <Col span={12} className="p-5">
            <h1>Get more discount if you order from us!</h1>
            <h6 className="mt-4">
              Join with us then you must have get a discount and get promo from
              us to you, enjoy and happy to order.
            </h6>

            <div className="row mt-4">
              <div class="col-8">
                <label for="inputPassword2" class="visually-hidden">
                  Your Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  onChange={handelOnchage}
                  id="email"
                  placeholder="Your Email"
                  inputValue={email.trim()}
                />
              </div>
              <div class="col-4 ps-0">
                {/* <Button block onClick={register} danger type="primary">
                  Register
                </Button> */}
                <button
                  onClick={register}
                  type="submit"
                  class="btn btn-dark mb-3 w-100"
                >
                  GO
                </button>
              </div>
              {errorMessages !== "" ? (
                <div className="col-12">
                  <div className="mt-3 mx-6 p-2 alert alert-danger">
                    {errorMessages}
                  </div>
                </div>
              ) : null}
              {successMessages !== "" ? (
                <div className="col-12">
                  <div className="mt-3 mx-6 p-2 alert alert-success">
                    {successMessages}
                  </div>
                </div>
              ) : null}
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default NewsLetter;
