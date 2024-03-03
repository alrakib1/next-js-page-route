import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ClientDetails = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const projects = [
    { id: "ProjectA", name: "Project A" },
    { id: "ProjectB", name: "Project B" },
    { id: "ProjectC", name: "Project C" },
    { id: "ProjectD", name: "Project D" },
  ];

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold">
        {" "}
        this is the details page of client {router.query.id}
      </h2>
      <ul className="mt-5 flex gap-2 justify-center">
        {projects.map((project) => (
          <li
            className="text-white hover:bg-yellow-600 px-2 py-1 rounded-md transition-colors duration-150 bg-slate-400"
            key={project.id}
          >
            <Link href={`/clients/${router.query.id}/${project.name}`}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientDetails;
