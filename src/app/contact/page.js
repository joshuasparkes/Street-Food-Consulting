"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
        })
        .catch((err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send email. Please try again later.");
        });
    }
  };

  return (
    <div className="flex flex-col pt-12 min-h-screen justify-center items-center">
      <h1 className="text-4xl w-3/4 font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mb-8 w-3/4  text-center">
        Ready to take your street food business to the next level? Book a free
        consultation with our experts today! Fill out the form below, and we'll
        get back to you as soon as possible to schedule your appointment.
      </p>
      <form
        className="text-lg border rounded-md p-4 w-1/2 flex flex-col gap-4 "
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
          className="border-black text-black bg-yellow-300 rounded-sm border-4 p-2 hover:bg-white hover:text-black"
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <div className="flex">
        <div className="border hover:bg-slate-900 cursor-pointer rounded-md   py-2 px-4 m-4">
          <FontAwesomeIcon icon={faPhone} />
          <p>Call on</p>
          <p className='text-blue-300 underline'>+44 7902 223709</p>
        </div>
        <div className="border hover:bg-slate-900 cursor-pointer rounded-md  py-2 px-4 m-4">
          <FontAwesomeIcon icon={faEnvelope} />

          <p>or mail</p>
          <p className='text-blue-300 underline'>info@streetfoodconsulting.co.uk</p>
        </div>
      </div>
    </div>
  );
}
