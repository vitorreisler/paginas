import { v4 as uuidv4 } from "uuid";
//Categorias                  | CURSO
// - velas-resina,            | - curso-pedras-resina
// - velas-desenformadas,     | - 
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
    srcVideo: "vídeo-vela-gruta-site.mov",
    titulo: "video-vela-gruta",
    categoria: "velas-resina",
    tipo: "video",
    curso: "curso-pedras-resina",
  },

  {
    id: uuidv4(),
    srcVideo: "vela-pilar-bolas-natal.webp",
    titulo: "vela gruta especial de natal com bolas natalinas",
    categoria: "velas-resina",
    tipo: "imagem",
    curso: "",
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
    srcVideo: "vela-pilar-fundo-do-mar.webp",
    titulo: "vela pilar fundo do mar",
    categoria: "velas-resina",
    tipo: "imagem",
    curso: "curso-pedras-resina",
  },

  {
    id: uuidv4(),
    srcVideo: "video-safari.mp4",
    titulo: "video-safari",
    categoria: "sabonetes",
    tipo: "video",
    curso: "",
  },
  {
    id: uuidv4(),
    srcVideo: "video-vela-desmoldada.mov",
    titulo: "video-vela-desmoldada",
    categoria: "velas-desenformadas",
    tipo: "video",
    curso: "",
  },
];
