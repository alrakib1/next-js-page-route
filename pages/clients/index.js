import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    { id: "rakib", name: "Rakib" },
    { id: "rafi", name: "Rafi" },
    { id: "shakib", name: "Shakib" },
    { id: "mushfiq", name: "Mushfiq" },
    { id: "tamim", name: "Tamim" },
    { id: "mahmudullah", name: "Mahmudullah" },
    { id: "mashrafe", name: "Mashrafe" },
    { id: "mehedi", name: "Mehedi" },
  ];

  return (
    <div>
      <h2 className="mt-5 text-center font-bold text-5xl">
        {" "}
        This is the client page
      </h2>
      <ul className="flex gap-4 ml-10 mt-5">
        {clients.map((client) => (
          <li
            className="text-white hover:bg-yellow-600 px-2 py-1 rounded-md transition-colors duration-150 bg-slate-400"
            key={client.id}
          >
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
