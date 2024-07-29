"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:5075527,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Street Food Consulting</title>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/logo.jpeg" alt="Logo" width={300} height={300} />
        <div className="text-3xl h-screen">
          I started my streetfood business from scratch with no experience and
          without knowing anyone else in the trade who i could ask for advice.
        </div>
        <div className="text-3xl h-screen">
          I made so many mistakes along the way and this is where i can help.
          Basically ive been there seen it done it.{" "}
        </div>
        <div className="text-3xl h-screen">
          We work with clients to help get their ideas/dreams off the ground and
          to market with the least possible risk whilst making profit.
        </div>{" "}
        <div className="text-3xl h-screen">
          We work close with event organisers, equipment, food & packaging
          suppliers and many of the top streetfood traders in the country.
        </div>
        <div className="text-3xl h-screen">
          Sourcing the best yet most cost efficient items.
        </div>
      </div>
    </>
  );
}
