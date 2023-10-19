import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic from '../public/Group 1.png';

const Footer = () => {
  return (
    <footer className="bg-[#374151] text-white body-font mt-20">
      <div className="container px-5 py-24 mx-auto grid md:grid-cols-2">
        <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src={pic} alt="Your Logo" width={50} height={50} />
              <span className="ml-3 text-xl">Fire</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#9CA3AF] tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <Link href="/about">
                <div className="text-white hover:text-[#EF4444]">About</div>
              </Link>
              <Link href="/privacy-policy">
                <div className="text-white hover:text-[#EF4444]">Privacy policy</div>
              </Link>
              <Link href="/terms-and-conditions">
                <div className="text-white hover:text-[#EF4444]">Term & Condition</div>
              </Link>
              <Link href="/cookie-policy">
                <div className="text-white hover:text-[#EF4444]">Cookie Policy</div>
              </Link>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#9CA3AF] tracking-widest text-sm mb-3">
              Legal
            </h2>
            <nav className="list-none mb-10">
              <Link href="/privacy-policy">
                <div className="text-white hover-text-[#EF4444]">Privacy policy</div>
              </Link>
              <Link href="/terms-and-conditions">
                <div className="text-white hover-text-[#EF4444]">Term & Condition</div>
              </Link>
              <Link href="/cookie-policy">
                <div className="text-white hover-text-[#EF4444]">Cookie Policy</div>
              </Link>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#9CA3AF] tracking-widest text-sm mb-3">
              Follow Us
            </h2>
            <nav className="list-none mb-10">
              <Link href="https://www.facebook.com">
                <div className="text-white hover:text-[#EF4444]">Facebook</div>
              </Link>
              <Link href="https://www.instagram.com">
                <div className="text-white hover:text-[#EF4444]">Instagram</div>
              </Link>
              <Link href="https://twitter.com">
                <div className="text-white hover:text-[#EF4444]">Twitter</div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <br />
      {/* White border and copyright text */}
      <div className="border-t border-white text-center py-3">
        <p className="text-white">
          © Copyright 2023, All Rights Reserved by Fire
        </p>
      </div>
    </footer>
  );
};

export default Footer;
