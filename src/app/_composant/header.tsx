"use client";
import "../../styles/header.css";
import { useState } from "react";
import soleil from "../../../public/asset/external-sun-lighting-flaticons-flat-flat-icons.png";
import lune from "../../../public/asset/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png";
import nuageClaire from "../../../public/asset/nuageClaire.png";
import nuageSombre from "../../../public/asset/nuageDark.png";
export default function Header() {
  // Utilisation de useState pour gérer l'état de l'image
  const [currentImageLune, setCurrentImageLune] = useState(soleil.src); // Image par défaut
  
  // Fonction pour changer l'image lors du clic
  const toggleImage = () => {
    const newImageLune = currentImageLune === soleil.src ? lune.src : soleil.src;
    setCurrentImageLune(newImageLune);
    if (currentImageLune !== lune.src) {
      // header
      document.querySelector(".header-container")?.classList.add("header-dark");
      document.querySelector(".titre-header")?.classList.add("titre-header-dark");
      const navheader = document.querySelectorAll(".nav-header-a");
      navheader.forEach(navHeader => {
        navHeader.classList.add("titre-header-dark");
      });
// head
     document.querySelector(".img-nuage")?.setAttribute("srcset", nuageSombre.src);
      document.querySelector(".titre-head")?.classList.add("titre-header-dark");
      document.querySelector(".text-head")?.classList.add("titre-header-dark");
// about
      document.querySelector(".about-me")?.classList.add("about-me-dark");
      document.querySelector(".titre-about")?.classList.add("titre-header-dark");
      document.querySelectorAll(".text-article-about")[0]?.classList.add("titre-header-dark");
      document.querySelectorAll(".text-article-about")[1]?.classList.add("titre-header-dark");

    }
  };

  return (
    <header className="header-container">
      <h1 className="titre-header">Samuel.P</h1>
      <nav className="nav-header">
        <a href="#home" className="nav-header-a" >Home</a>
        <a href="#about" className="nav-header-a">About</a>
        <a href="#skills" className="nav-header-a">Service</a>
        <a href="#projects" className="nav-header-a">Projects</a>
        <a href="#contact" className="nav-header-a">Contact</a>
      </nav>
      <img
        src={currentImageLune}
        alt="sun"
        className="header-img-darkmode"
        onClick={toggleImage}
      />
    </header>
  );
}
