'use client'
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !phone) {
      setError('Please provide either an email address or a phone number.');
    } else {
      setError('');
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', { email, phone });
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='border-white rounded-sm border-4 p-2 hover:bg-white hover:text-black' type="submit">Submit</button>
      </form>
    </div>
  );
}