import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? "text-teal-500" : "text-black";
  };

  return (
    <nav className="hidden sm:flex justify-center flex-grow mx-4">
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className={`hover:text-gray-500 ${isActive("/")}`}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`hover:text-gray-500 ${isActive("/contact")}`}
          >
            Nos Services
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`hover:text-gray-500 ${isActive("/services")}`}
          >
            Nos Realisations
          </Link>
        </li>
        <li>
          <Link
            href="/galerie"
            className={`hover:text-gray-500 ${isActive("/jobs")}`}
          >
            Galerie
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/contact"
            className={`hover:text-gray-500 ${isActive("/jobs")}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
