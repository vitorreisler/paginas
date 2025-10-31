import { v4 as uuidv4 } from "uuid";

{
  /*    {
    id: uuidv4(),
    href: "https://s.shopee.com.br/6Kvgs9fOx0?share_channel_code=1",
    srcImg:
      "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfzk22gm7g913c.webp",
    titulo: "Noteworthy technology acquisitions 2021",
    categoria: "cosmeticos",
    plataforma: "/images/shopee-logo.webp",
  }, */
}

const shopeeLogo = "/images/shopee-logo.webp";
const mercadoLivreLogo = "/images/mercado-livre-logo.webp";

export const produtosRecomendadosData = [
  {
    id: uuidv4(),
    href: "https://s.shopee.com.br/6Kvgs9fOx0?share_channel_code=1",
    srcImg:
      "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfzk22gm7g913c.webp",
    titulo: "Noteworthy technology acquisitions 2021",
    categoria: "cosmeticos",
    plataforma: shopeeLogo,
  },
  {
    id: uuidv4(),
    href: "https://s.shopee.com.br/11a48YV19?share_channel_code=1",
    srcImg:
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7trgyy38qwy3b.webp",
    titulo:
      "Cera De Coco Para Velas Aromáticas 100% Vegetal Vegana - Solven 1 Kg",
    categoria: "velas",
    plataforma: mercadoLivreLogo,
  },
];
