import React from "react";
import styles from "../styles/Home.module.scss";
import { Form, Button } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import Link from "next/link";

export default function login() {
  return (
    <>
      <LoginForm />
    </>
  );
}
