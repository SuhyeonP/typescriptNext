import React, { useState } from "react";
import Head from "next/head";
import LayOut from '../component/layout'
import Link from "next/link";
export default function Home() {

  return (
      <>
          <Head>
              <title>suhyeon</title>
          </Head>
          <div className="container">
              <LayOut/>
              <p className="main-men">Here is the another page of Portfolio, this page dont care publishing.</p>
              <p className="goback-to-port">You want go back?</p>
              <Link href="https://suhyeonp.github.io/"><a className="goback-to-port golink" target="_blank" rel="noreferrer noopener" >Go back to PORTFOLIO</a></Link>
          </div>
      </>
  );
}