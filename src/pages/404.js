import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function PageNotFound() {
  return (
    <>
      <main className="main">
      <Head>
        <title>Food App - 404!</title>
      </Head>
        <section className="bg-brand p-4 text-light">
          <h1>Page Not found</h1>
          <h2>
            <Link href="/">
              <a>Go back to home page.....</a>
            </Link>
          </h2>
        </section>
      </main>
    </>
  );
}
