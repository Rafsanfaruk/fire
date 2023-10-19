import Image from "next/image";
import React from "react";
import img from "../public/Ellipse 1.png";

const Community = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center my-2">
          <h1 className="text-3xl font-bold">Community Highlights</h1>
          <p className="text-sm">
            Highlights of various kinds of communities that are trending and
            widely discussed. Design with pleasure.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* First Card */}
          <div className="p-4 md:w-1/2 sm:w-full">
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold title-font mt-5">
                  Design with pleasure
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel tempor nisl, quis hendrerit ligula. Aenean mattis sapien
                  in nibh consectetur, sed commodo erat vulputate.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center mt-3 gap-2">
                    <div className="w-10 h-10">
                      <Image
                        src={img}
                        alt="Your Logo"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div>
                      <h3>The Social Network</h3>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#FF6F61] rounded-md p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
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
          </div>

          {/* Second Card */}
          <div className="p-4 md:w-1/2 sm:w-full">
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold title-font mt-5">
                  Design with pleasure
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel tempor nisl, quis hendrerit ligula. Aenean mattis sapien
                  in nibh consectetur, sed commodo erat vulputate.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center mt-3 gap-2">
                    <div className="w-10 h-10">
                      <Image
                        src={img}
                        alt="Your Logo"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div>
                      <h3>The Social Network</h3>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#FF6F61] rounded-md p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
