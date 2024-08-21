"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import About from "./about/page";
import Contact from "./contact/page";
import Services from "./services/page";

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
      <div>
        <div className="content flex pt-8 flex-col justify-center items-center gap-4">
          <Image className='rounded-full' src="/logo.jpeg" alt="Logo" width={200} height={200} />
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold">
            Start Your Street Food Business Today
          </h1>
          <p className="text-sm text-slate-300 md:text-base lg:text-base mb-8">
            Expert advice and support to help you launch and grow your street
            food business.
          </p>
          <Link
            className="bg-yellow-400 flex items-center text-black px-6 py-3 mb-12 rounded-lg text-base font-semibold hover:bg-yellow-600 transition duration-300"
            href="/#contact"
          >
            Get Started{" "}
            <FontAwesomeIcon width="16" className="ml-2" icon={faChevronCircleRight} />
          </Link>
          <div className='w-full flex justify-center items-center' id="about">
            <About />
          </div>
          <div className='w-full flex justify-center items-center'  id="services">
            <Services />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
