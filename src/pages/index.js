import Head from "next/head";
import { Fragment } from "react";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import Works from "components/Works";
import About from "components/About";
import Contact from "components/Contact";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dayitava Upadhyay</title>
        <meta name="description" content="Dayitava Upadhyay Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Works />
      <About />
      <Contact />
    </Fragment>
  );
}
