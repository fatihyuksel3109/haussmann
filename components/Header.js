import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navigation from "../UI/Navigation";

const Header = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? "text-teal-500" : "text-black";
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between items-center bg-white px-10">
      {/* Logo */}
      <Link href="/" className="block">
        <img src="/images/haussmannlogo.png" alt="Logo" className="h-24" />
      </Link>

      {/* Navigation */}
      <Navigation />
      {/* CTA Button */}
      <Link
        href="/contact"
        className="hidden sm:flex inline-block border border-transparent rounded-full bg-teal-400 text-white font-bold py-3 px-6 hover:bg-teal-500 transition-all duration-150 ease-in-out"
      >
        Demande de Devis
      </Link>
      <div className="flex flex-col items-center">
        {/* Toggle Button */}
        <button className="sm:hidden" onClick={toggleMenu}>
          <img src="/images/bars-solid.svg" alt="Menu" className="h-6 w-6" />
        </button>
        {/* Menu */}
        {showMenu && (
          <div className="sm:hidden bg-white w-full">
            <ul className="flex flex-col space-y-2 items-center mt-2">
              <li>
                <Link
                  href="/"
                  className={`block py-2 hover:text-gray-500 ${isActive("/")}`}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 hover:text-gray-500 ${isActive(
                    "/contact"
                  )}`}
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 hover:text-gray-500 ${isActive(
                    "/services"
                  )}`}
                >
                  Nos Realisations
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className={`block py-2 hover:text-gray-500 ${isActive(
                    "/services"
                  )}`}
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 hover:text-gray-500 ${isActive(
                    "/services"
                  )}`}
                >
                  Contact
                </Link>
              </li>
              <li>
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-block border border-transparent rounded-full bg-teal-400 text-white font-bold py-3 px-6 hover:bg-teal-500 transition-all duration-150 ease-in-out"
                >
                  Demande de Devis
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
