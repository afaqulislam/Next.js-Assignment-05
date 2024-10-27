import React from "react";
import { Button } from "@/components/ui/button";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-bold mb-8 text-white text-center">
            Get in Touch
          </h1>
          <form className="bg-gray-800 p-8 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105">
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition duration-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition duration-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition duration-200"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center mb-6">
              <Button variant="destructive">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
