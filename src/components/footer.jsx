import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-100 sm:text-center">
          © 2025{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/silviamonteiro.art/"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-gray-200 rounded"
            aria-label="Visitar perfil do Instagram (abre em nova aba)"
          >
            BySilviaMonteiro
          </a>
          . All Rights Reserved.
        </span>
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 sm:mt-0"
          role="list"
          aria-label="Links do rodapé"
        >
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
          <li>
            <Link href="/rotas/produtos-recomendados" className="hover:underline me-4 md:me-6">
              Produtos-recomendados
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
