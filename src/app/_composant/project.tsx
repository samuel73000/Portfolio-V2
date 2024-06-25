import "../../styles/projects.css"
import Image from "next/image";

interface ProjectProps {
    src: string;
    alt: string;
    titre: string;
    texte: string;
  }
  export default function Projects({ src, alt,titre,texte}: ProjectProps) {

    return (
      <section>
        <Image src={src} alt={alt} className="" />
        <div>
            <h3>{titre}</h3>
            <p>{texte}</p>
            <button>Read more</button>
        </div>
      </section>
    );
  }