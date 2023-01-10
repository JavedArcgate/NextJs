import React from "react";
import styles from "../styles/Home.module.scss";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import RegisterForm from "../components/RegisterForm";

export default function login() {
  return (
    <>
      <RegisterForm />
    </>
  );
}
