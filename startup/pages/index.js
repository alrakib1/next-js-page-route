import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="text-center">
      <ul className="mt-4 flex gap-2 ml-5">
        <li className="text-white hover:bg-yellow-600 px-2 py-1 rounded-md transition-colors duration-150 bg-slate-400">
          <Link href="/product">Product</Link>
        </li>
        <li className="text-white hover:bg-yellow-600 px-2 py-1 rounded-md transition-colors duration-150 bg-slate-400">
          <Link href="/clients">Clients</Link>
        </li>
        <li className="text-white hover:bg-yellow-600 px-2 py-1 rounded-md transition-colors duration-150 bg-slate-400">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <h2 className="text-4xl mt-10 font-semibold">Home Page</h2>
    </div>
  );
};

export default HomePage;
