'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !phone) {
      setError('Please provide either an email address or a phone number.');
    } else {
      setError('');
      // Send email using EmailJS
      const templateParams = {
        email: email,
        phone: phone,
      };

      emailjs.send('service_vutpkqe', 'template_7r4fudr', templateParams, 'XFH4nW1RpR_3j4Hhy')
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setSuccess('Form submitted successfully!');
        })
        .catch((err) => {
          console.error('Failed to send email:', err);
          setError('Failed to send email. Please try again later.');
        });
    }
  };

  return (
    <div>
      <form className='text-3xl flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-row gap-2 w-full'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='rounded-sm p-2 ml-4 text-black w-full'
          />
        </div>
        <div className='flex flex-row gap-2 w-full'>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='rounded-sm ml-4 p-2 text-black w-full'
          />
        </div>
        <button className='border-white rounded-sm border-4 p-2 hover:bg-white hover:text-black' type="submit">Submit</button>
      </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}