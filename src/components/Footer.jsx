import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-6 px-4 mt-auto border-t border-green-600">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 text-center sm:text-left">
        {/* Call to Action */}
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Need Help with Networking or Coding or Any thing IT?
          </h3>
          <p className="text-sm text-zinc-300">
            I'm available for personal tutoring in Networking, React, Python, C#, and more!
          </p>
        </div>

        {/* WhatsApp Contact */}
        <div>
          <a
            href="https://wa.me/27633599308"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-full transition"
          >
            <FaWhatsapp className="mr-2" />
            Get in Touch on WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center sm:justify-start">
          <a
            href="https://github.com/KatisoNtseare"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/katiso-ntseare"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-xs text-zinc-500 mt-4">
        © {new Date().getFullYear()} Katiso Ntseare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
