import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 px-6 md:px-20 lg:px-32" id="Footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 items-start">

        {/* Brand */}
        <div>
          <img src={assets.logo_dark} alt="PureSpace Realty" className="h-8" />
          <p className="mt-4 text-sm leading-relaxed">
            At PureSpace Realty, we connect people with spaces that inspire and 
            investments that grow. From dream homes to prime commercial properties, 
            we make real estate simple and reliable.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#Header" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About Us</a></li>
            <li><a href="#Projects" className="hover:text-white">Projects</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">Tanay, Rizal, Philippines</p>
          <p className="text-sm mb-2">+63 976 576 5313</p>
          <p className="text-sm mb-2">info@purespacerealty.com</p>
          <p className="text-sm">Mon – Fri: 9:00am – 6:00pm</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        © {new Date().getFullYear()} PureSpace Realty. Built with trust, powered by passion.
      </div>
    </footer>
  );
};

export default Footer;
