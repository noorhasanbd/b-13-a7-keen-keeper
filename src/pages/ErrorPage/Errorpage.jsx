import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-lg">
        <h1 className="text-8xl font-extrabold text-[#244D3F]">404</h1>

        <h2 className="text-2xl font-semibold mt-4 text-[#64748B]">
          Oops! Page Not Found
        </h2>

        <p className="text-[#64748B] mt-3">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-[#244D3F] text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
