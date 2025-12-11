import Image from "next/image";

const LinkTree = () => {
    return ( 
        <section className="flex flex-col items-center gap-3 mt-5">
            <h1 className="story-script-regular text-4xl text-center">Conheça minhas Redes Sociais</h1>
                <a className="hover:scale-110 duration-300" href="https://youtube.com/channel/UCg7JpGJz9oINQJQZRNkGHBQ/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/youtube-logo.webp" alt="Logo youtube" width={60} height={60} />
                    </a>
                <a className="hover:scale-110 duration-300"  href="https://www.instagram.com/silviamonteiro.art/" target="_blank" rel="noopener noreferrer">
                    <Image className="rounded-xl" src="/images/instagram-logo.webp" alt="Logo instagram" width={60} height={60} />
                    </a>
                <a className="hover:scale-110 duration-300"  href="https://www.tiktok.com/@silviamonteiro.art?_r=1&_t=ZS-928NgBSPtZQ" target="_blank" rel="noopener noreferrer">
                    <Image className="rounded-xl" src="/images/tiktok-logo.webp" alt="Logo tiktok" width={60} height={60} />
                    </a>
        </section>
     );
}
 
export default LinkTree;