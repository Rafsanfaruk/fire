import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import pic1 from "../public/Community-cuate 1.svg";

const Banner = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
            Welcome to the
            <span className="text-red-500"> FIRE</span>
            <br />
            community
          </h1>
          <p className="mb-8 leading-relaxed">
            A special community for financial independence and early retirees to
            interact with each other
          </p>
          <div className="flex justify-center">
            <Button className="inline-flex  rounded text-lg">
              Get started
            </Button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              See Community
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src={pic1} alt="Your Logo" width={500} height={500} />
        </div>
      </div>
      <div className="pl-8 flex flex-col gap-4 md:flex-row md:gap-2 justify-between">
        <div className="flex gap-2">
          <span className="bg-[#F9DFE7] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-bold">Great Community</h3>
            <p className="text-sm">Join an amazing community and help each <br /> other among users</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <span className="bg-[#EEDFEA] p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>

          </span>
          <div>
            <h3 className="font-bold">Social Networking</h3>
            <p className="text-sm">Connect with other users, and share your tips <br /> and hobbies</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <span className="bg-[#E2DFE9] p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>

          </span>
          <div>
            <h3 className="font-bold">Marketplace</h3>
            <p className="text-sm">Sell your digital products and earn extra <br /> income</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
