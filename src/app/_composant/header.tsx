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
      document.querySelectorAll(".titre-about")[0]?.classList.add("titre-header-dark");
      document.querySelectorAll(".titre-about")[1]?.classList.add("titre-header-dark");
      document.querySelectorAll(".titre-about")[2]?.classList.add("titre-header-dark");
      document.querySelectorAll(".titre-about")[3]?.classList.add("titre-header-dark");
      document.querySelectorAll(".text-article-about")[0]?.classList.add("titre-header-dark");
      document.querySelectorAll(".text-article-about")[1]?.classList.add("titre-header-dark");
// service
      document.querySelector(".service")?.classList.add("service-dark");
//projects
      document.querySelector(".projects")?.classList.add("about-me-dark");
//contact
      document.querySelector(".contact")?.classList.add("service-dark");
      document.querySelectorAll(".titre-info-contact")[0]?.classList.add("titre-header-dark");
      document.querySelectorAll(".titre-info-contact")[1]?.classList.add("titre-header-dark");
      document.querySelectorAll(".titre-info-contact")[2]?.classList.add("titre-header-dark");
 //footer
      document.querySelector(".footer")?.classList.add("header-dark");
      document.querySelector(".copyright")?.classList.add("titre-header-dark");
    }if (currentImageLune === lune.src) {
     // header
     document.querySelector(".header-container")?.classList.remove("header-dark");
     document.querySelector(".titre-header")?.classList.remove("titre-header-dark");
     const navheader = document.querySelectorAll(".nav-header-a");
     navheader.forEach(navHeader => {
       navHeader.classList.remove("titre-header-dark");
     });
// head
document.querySelector(".img-nuage")?.setAttribute("srcset", nuageClaire.src);
document.querySelector(".titre-head")?.classList.remove("titre-header-dark");
document.querySelector(".text-head")?.classList.remove("titre-header-dark");
// about
document.querySelector(".about-me")?.classList.remove("about-me-dark");
document.querySelectorAll(".titre-about")[0]?.classList.remove("titre-header-dark");
document.querySelectorAll(".titre-about")[1]?.classList.remove("titre-header-dark");
document.querySelectorAll(".titre-about")[2]?.classList.remove("titre-header-dark");
document.querySelectorAll(".titre-about")[3]?.classList.remove("titre-header-dark");
document.querySelectorAll(".text-article-about")[0]?.classList.remove("titre-header-dark");
document.querySelectorAll(".text-article-about")[1]?.classList.remove("titre-header-dark");
// service
document.querySelector(".service")?.classList.remove("service-dark");
//projects
      document.querySelector(".projects")?.classList.remove("about-me-dark");
      //contact
      document.querySelector(".contact")?.classList.remove("service-dark");
      document.querySelectorAll(".titre-info-contact")[0]?.classList.remove("titre-header-dark");
      document.querySelectorAll(".titre-info-contact")[1]?.classList.remove("titre-header-dark");
      document.querySelectorAll(".titre-info-contact")[2]?.classList.remove("titre-header-dark");
 //footer
      document.querySelector(".footer")?.classList.remove("header-dark");
      document.querySelector(".copyright")?.classList.remove("titre-header-dark");
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
