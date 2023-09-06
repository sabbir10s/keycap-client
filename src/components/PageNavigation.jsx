import React from "react";
import { Link } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className="flex items-center space-x-1 text-lg">
      <Link to="/" className="text-blue-700">
        Home
      </Link>
      <span>/ {title}</span>
    </div>
  );
};

export default PageNavigation;
