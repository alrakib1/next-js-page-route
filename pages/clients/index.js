import Link from "next/link";
import React from "react";

const ClientPage = () => {
  return (
    <div>
      <ul className="flex gap-4 ml-10">
        <li>
          <Link href="/clients/rakib">Rakib</Link>
        </li>
        <li>
          <Link href="/clients/rafi">Rafi</Link>
        </li>
      </ul>
      <h2 className="mt-5"> This is the client page</h2>
    </div>
  );
};

export default ClientPage;
