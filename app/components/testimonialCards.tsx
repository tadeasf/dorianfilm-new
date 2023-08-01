/** @format */

import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  authorImage,
}) => {
  return (
    <figure className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <blockquote className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {quote}
        </h3>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3">
        <Image
          className="rounded-full w-9 h-9"
          src={authorImage}
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{authorName}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {authorRole}
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
