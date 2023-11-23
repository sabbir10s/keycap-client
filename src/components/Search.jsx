import React from "react";

const Search = () => {
  return (
    <div>
      <div className="w-full max-w-screen-xl">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white">
              <div className="flex items-center bg-transparent rounded-md relative">
                <div className="pl-2 absolute">
                  <svg
                    className="fill-current text-gray-500 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
                <input
                  className="w-full border bg-gray-100/50 focus:bg-white text-gray-700 leading-tight focus:outline-none pl-10 py-2.5"
                  id="search"
                  type="text"
                  placeholder="Search in product"
                />
              </div>
              <div className="py-3 text-sm hidden">
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">Tighten Co.</div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide">
                    Team
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                  <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">
                    Taylor Otwell
                  </div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide">
                    Member
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">Adam Wathan</div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide">
                    Member
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">
                    Duke Street Studio Inc.
                  </div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide">
                    Team
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                  <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">Jeffrey Wey</div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide">
                    Member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
