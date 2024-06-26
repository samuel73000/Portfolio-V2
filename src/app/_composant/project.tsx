"use client";
import "../../styles/projects.css";
import Image from "next/image";
import React, { useEffect, useRef } from 'react';
interface ProjectProps {
  src: any;
  alt: string;
  titre: string;
  texte: string;
}
export default function Projects({ src, alt, titre, texte }: ProjectProps) {


  return (
    <section className="section-projects">
      <Image src={src} alt={alt} className="img-projets" />
      <div className="container-texte-projects">
        <h3 className="titre-projects">{titre}</h3>
        <p className="texte-projects">{texte}</p>
        <button className="btn-projects">Découvrir le site</button>
      </div>
    </section>
  );
}
