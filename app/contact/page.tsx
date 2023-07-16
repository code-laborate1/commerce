'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
        loading: 'Sending...',
        success: 'Email received! We will contact you soon.',
        error: 'Oops! Something went wrong.'
      });
      await new Promise(resolve => setTimeout(resolve, 1000));

      setName('');
      setEmail('');
      setMessage('');
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Form submission failed.');
    }
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center h-100 bg-gray-100 p-10 space-y-10 md:space-y-0 md:space-x-10"
      initial="hidden"
      animate="visible"
      variants={formVariant}
    >
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you. Please fill out the form to reach us.
        </p>
      </div>
      <form className="md:w-1/2" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              placeholder="Your Message"
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <div className="w-full flex items-start px-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto lg:mx-0 hover:underline bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transition-colors duration-150"
              type="submit"
            >
              Submit
            </motion.button>
          </div>
        </div>
      </form>
      <Toaster />
    </motion.div>
  );
};

export default ContactForm;
