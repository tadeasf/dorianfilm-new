/** @format */

import React from "react";
import BlogCard from "./blogCard"; // Adjust the path if needed

const Blog: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blog;
