import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Linklytics</h2>
          <p> Shrink it. Share it. See the results :) </p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2024 Linklytics. All rights reserved.
        </p>

       <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="https://www.instagram.com/_pratik_ingole_22/?hl=en" className="hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/_pratik_ingole_22/" className="hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/Pratikweb22" className="hover:text-gray-200">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pratik-ingole-239952207/" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


 