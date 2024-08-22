"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-310709348";
    script.async = true;
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-310709348');
    `;
    document.head.appendChild(script2);
  }, []);

  const gtag_report_conversion = (url) => {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
        'send_to': 'AW-310709348/JcQQCP7A8IsYEOSYlJQB',
        'event_callback': callback
    });
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !phone) {
      setError("Please provide either an email address or a phone number.");
    } else {
      setError("");
      // Send email using EmailJS
      const templateParams = {
        email: email,
        phone: phone,
      };

      emailjs
        .send(
          "service_vutpkqe",
          "template_7r4fudr",
          templateParams,
          "XFH4nW1RpR_3j4Hhy"
        )
        .then((response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          setSuccess("Form submitted successfully!");
          gtag_report_conversion(); // Call conversion tracking here
        })
        .catch((err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send email. Please try again later.");
        });
    }
  };

  return (
    <>
      <Head>
        {/* Google Tag Manager script will be added dynamically */}
      </Head>
      <div className="flex flex-col pt-12 min-h-screen justify-center items-center">
        <h1 className="text-4xl w-3/4 font-bold mb-4">Get in Touch</h1>
        <p className="text-lg mb-8 w-3/4 text-center">
          Ready to take your street food business to the next level? Book a free
          consultation with our experts today! Fill out the form below, and
          we&apos;ll get back to you as soon as possible to schedule your
          appointment.
        </p>
        <form
          className="text-lg border rounded-md p-4 w-full md:w-1/2 mb-4 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm p-2 ml-4 text-black w-full"
            />
          </div>
          <div className="flex flex-row gap-2 w-full">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-sm ml-4 p-2 text-black w-full"
            />
          </div>
          <button
            className="shadow-yellow-400 shadow-sm text-black bg-yellow-300 rounded-sm p-2 hover:bg-white hover:text-black"
            type="submit"
          >
            Submit
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <div className="flex w-full items-center justify-center flex-col gap-4 md:flex-row lg:flex-row md:w-1/2">
          <a
            href="tel:+447903223709" // Replace with your actual phone number
            className="border bg-black shadow-white shadow-md w-full hover:bg-slate-900 cursor-pointer rounded-md py-2 px-4 mt-4 "
          >
            <FontAwesomeIcon width="16" icon={faPhone} />
            <p className="text-blue-300 underline">Call us</p>
            <p className="text-xs mt-2">+44 790 322 3709</p>
          </a>
          <a
            href="mailto:hello@streetfoodconsulting.co.uk"
            className="border bg-black shadow-white shadow-md w-full hover:bg-slate-900 cursor-pointer rounded-md py-2 px-4 mt-4 "
          >
            <FontAwesomeIcon width="16" icon={faEnvelope} />
            <p className="text-blue-300 underline">Send Email</p>
            <p className="text-xs mt-2">hello@streetfoodconsulting.co.uk</p>
          </a>
        </div>
      </div>
    </>
  );
}