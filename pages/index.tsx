import React, { useState } from "react";
import Head from "next/head";
import LayOut from '../component/layout'
export default function Home() {


  return (
      <>
          <Head>
              <title>suhyeon</title>
          </Head>
          <div className="container">
              <LayOut/>
          </div>
      </>
  );
}