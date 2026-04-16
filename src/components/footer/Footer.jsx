"use client";

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#295943] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">
          Keen<span className="font-light">Keeper</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 max-w-xl mx-auto mb-8 text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-10">
          <p className="mb-4 text-sm">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </div>
            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>
            <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-white">
              Cookies
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;