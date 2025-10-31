import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const rota = "/rotas";
  const rotas = [
    {
      nome: "Home",
      rota: "/",
    },
    {
      nome: "Sobre",
      rota: `${rota}/sobre`,
    },
    {
      nome: "Cursos",
      rota: `${rota}/cursos`,
    },

    {
      nome: "Media",
      rota: `${rota}/media`,
    },
    {
      nome: "Produtos Recomendados",
      rota: `${rota}/produtos-recomendados`,
    },
  ];
  return (
    <nav className="border-gray-200">
      <div className="flex flex-wrap items-center justify-between py-3  px-4 mx-auto ">
        <span className="flex text-gray-100 gap-1 py-3 pl-20 w-1/3">
            BySilviaMonteiro
          </span>
       

        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-100 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
          role="navigation"
          aria-label="Menu principal"
        >
          <ul
            className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
            role="menubar"
          >
            {rotas.map((rota) => (
              <li key={rota.nome} role="none">
                <Link
                  href={rota.rota}
                  className="block py-2 pl-3 pr-4 text-gray-300 border-t border-gray-200 hover:bg-gray-50 hover:text-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg transition-colors duration-200"
                  role="menuitem"
                  aria-current={rota.rota === "/" ? "page" : undefined}
                >
                  {rota.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
