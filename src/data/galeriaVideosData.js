import { v4 as uuidv4 } from "uuid";
//Categorias                  | CURSO
// - velas-resina,            | - curso-pedras-resina
// - velas-desenformadas,     | - curso-sabonete-pintura-frutas
// - velas-no-copo Sabonetes, |
// - sabonetes-barra          |
// - sabonetes-liquido        |
// - sabonetes-artisticos     |
// Outros                     |
export const GaleriaVideosData = [
  {
    id: uuidv4(),
    srcVideo: "video-vela-cristais.mp4",
    titulo: "video-vela-cristais",
    categoria: "velas-no-copo",
    tipo: "video",
    curso: "",
  },

  {
    id: uuidv4(),
    srcVideo: "vela-pilar-bolas-natal.webp",
    titulo: "vela gruta especial de natal com bolas natalinas",
    categoria: "velas-resina",
    tipo: "imagem",
    curso: "curso-pedras-resina",
  },
  {
    id: uuidv4(),
    srcVideo: "vela-luminaria-natal-resina.webp",
    titulo: "vela luminaria natal resina",
    categoria: "velas-resina",
    tipo: "imagem",
    curso: "curso-pedras-resina",
  },
  {
    id: uuidv4(),
    srcVideo: "kit-pedras-resina.webp",
    titulo: "kit fundo do mar",
    categoria: "velas-resina",
    tipo: "imagem",
    curso: "curso-pedras-resina",
  },
  {
    id: uuidv4(),
    srcVideo: "vela-pilar-fundo-do-mar.webp",
    titulo: "vela pilar fundo do mar",
    categoria: "velas-resina",
    tipo: "imagem",
    curso: "curso-pedras-resina",
  },
  {
    id: uuidv4(),
    srcVideo: "frutas2.webp",
    titulo: "cesto de frutas",
    categoria: "curso-sabonete-pintura-frutas",
    tipo: "imagem",
    curso: "curso-sabonete-pintura-frutas",
  },
  {
    id: uuidv4(),
    srcVideo: "frutas3.webp",
    titulo: "cesto de frutas",
    categoria: "curso-sabonete-pintura-frutas",
    tipo: "imagem",
    curso: "curso-sabonete-pintura-frutas",
  },
  {
    id: uuidv4(),
    srcVideo: "frutas4.webp",
    titulo: "cesto de frutas",
    categoria: "curso-sabonete-pintura-frutas",
    tipo: "imagem",
    curso: "curso-sabonete-pintura-frutas",
  },
  {
    id: uuidv4(),
    srcVideo: "frutas6.webp",
    titulo: "cesto de frutas",
    categoria: "curso-sabonete-pintura-frutas",
    tipo: "imagem",
    curso: "curso-sabonete-pintura-frutas",
  },
];
