/** @format */

import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <figure className="max-w-screen-md">
      <div className="flex items-center mb-4 text-yellow-300">
        <svg
          className="w-5 h-5 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          {/* SVG paths */}
        </svg>
        {/* Add three more SVG elements here */}
      </div>
      <blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application.
        </p>
      </blockquote>
      <figcaption className="flex items-center mt-6 space-x-3">
        <Image
          className="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
            CTO at Flowbite
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};

export default Testimonial;
