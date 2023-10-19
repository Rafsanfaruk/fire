import Image from "next/image";
import React from "react";
import pic1 from "../public/Rectangle 4.png";
import pic2 from "../public/Rectangle 4 (1).png";
import pic3 from "../public/Rectangle 4 (2).png";

const Event = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="text-center my-2">
            <h1 className="text-3xl font-bold">Upcoming Events</h1>
            <p className="text-sm">
              You can rely on our amazing features list, and also our customer
              services will be a great experience for you without a doubt.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:w-full sm:mb-0 mb-6 relative">
            <div className="relative">
              <div className="absolute top-1 right-12 bg-red-400 text-white rounded-md p-2">
                <span className="text-sm">Oct 18</span>
              </div>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src={pic1} alt="Your Logo" width={400} height={400} />
              </div>
            </div>

            <h2 className="text-lg font-bold title-font mt-5">
              You should have an eagle’s eye on new trends and technologies
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Business Park, Opp. Corns Sam Restaurant, New York, US
            </p>
            <div className=" flex justify-between ">
              <div>
                <a className="text-[#FF6F61] inline-flex items-center mt-3">
                  Learn More
                </a>
              </div>
              <div className="text-[#FF6F61]">
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-full sm:mb-0 mb-6 relative">
            <div className="relative">
              <div className="absolute top-1 right-12 bg-red-400  text-white rounded-md p-2">
                <span className="text-sm">Oct 18</span>
              </div>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src={pic2} alt="Your Logo" width={400} height={400} />
              </div>
            </div>

            <h2 className="text-lg font-bold title-font mt-5">
              New Seminar on Newest Food Recipe from the World’s Best
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Business Park, Opp. Corns Sam Restaurant, New York, US
            </p>
            <div className=" flex justify-between ">
              <div>
                <a className="text-[#FF6F61] inline-flex items-center mt-3">
                  Learn More
                </a>
              </div>
              <div className="text-[#FF6F61]">
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-full sm:mb-0 mb-6 relative">
            <div className="relative">
              <div className="absolute top-1 right-12 bg-red-400 text-white rounded-md p-2">
                <span className="text-sm">Oct 18</span>
              </div>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src={pic3} alt="Your Logo" width={400} height={400} />
              </div>
            </div>
            <h2 className="text-lg  font-bold title-font mt-5">
              Learn from small things to create something bigger.
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Business Park, Opp. Corns Sam Restaurant, New York, US
            </p>
            <div className=" flex justify-between ">
              <div>
                <a className="text-[#FF6F61] inline-flex items-center mt-3">
                  Learn More
                </a>
              </div>
              <div className="text-[#FF6F61]">
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
