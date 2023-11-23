import React from "react";

const Select = ({ options, value, onChange, className, _id }) => {
  return (
    <div className="relative inline-block ">
      <select
        onChange={onChange}
        className={`appearance-none block rounded-md border px-4 py-1 placeholder:text-gray-400 text-sm leading-6 outline-none duration-300 ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 md:px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 text-gray-600 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;
