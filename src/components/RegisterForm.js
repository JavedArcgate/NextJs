import React from "react";
// import styles from "../styles/Home.module.scss";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import { FaHome } from "react-icons/fa";

export default function RegisterForm() {
  return (
    <>
      <main className="main">
        <Head>
          <title>Food App - Register</title>
        </Head>
        <section className="bg-brand p-4 text-light">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h4 className="fw-bold mb-0">Register Screen</h4>
            <Link href="/">
              <a>
                <FaHome size={18} color={"var(--bs-dark)"} />
              </a>
            </Link>
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-2">
              <Form.Label>Email Address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted ">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                minLength={8}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                minLength={8}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="my-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="d-grid gap-2">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form.Group>

            <Form.Group className="d-grid gap-2 mt-2">
              <Link href="/login">
                <a className="btn btn-outline-dark border-2 px-4">Login</a>
              </Link>
            </Form.Group>
          </Form>
        </section>
      </main>
    </>
  );
}
