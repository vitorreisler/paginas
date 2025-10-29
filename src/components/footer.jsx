import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center ">
          © 2025{" "}
          <a target="_blank" href="https://www.instagram.com/silviamonteiro.art/" className="hover:underline">
            BySilviaMonteiro
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300  sm:mt-0">
          <li>
            <Link href="/rotas/sobre" className="hover:underline me-4 md:me-6">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/rotas/cursos" className="hover:underline me-4 md:me-6">
              Cursos
            </Link>
          </li>
          <li>
            <Link href="/rotas/media" className="hover:underline me-4 md:me-6">
              Media
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
