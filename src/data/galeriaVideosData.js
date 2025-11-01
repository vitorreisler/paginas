import { v4 as uuidv4 } from "uuid";
//Categorias - velas-resina, velas-desenformadas, velas-no-copo Sabonetes, Outros
export const GaleriaVideosData = [
    {
        id: uuidv4(),
        srcVideo: "video-vela-cristais.mp4",
        titulo:"video-vela-cristais",
        categoria:"velas-no-copo"
    },
    {
        id: uuidv4(),
        srcVideo: "vídeo-vela-gruta-site.mov",
        titulo:"video-vela-gruta",
        categoria:"velas-resina"
    },
    
    {
        id: uuidv4(),
        srcVideo: "video-safari.mp4",
        titulo:"video-safari",
        categoria:"sabonetes"
    },
    {
        id: uuidv4(),
        srcVideo: "video-vela-desmoldada.mov",
        titulo:"video-vela-desmoldada",
        categoria:"velas-desenformadas"
    },
    
]
