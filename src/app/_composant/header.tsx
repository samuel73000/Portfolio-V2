'use client'
import "../../styles/header.css";
import { useState } from 'react';
import soleil from "../../../public/asset/external-sun-lighting-flaticons-flat-flat-icons.png";
import lune from "../../../public/asset/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
export default function Header() {
 

  // Utilisation de useState pour gérer l'état de l'image
  const [currentImage, setCurrentImage] = useState(soleil.src); // Image par défaut

  // Fonction pour changer l'image lors du clic
  const toggleImage = () => {
    const newImage = currentImage === soleil.src ? lune.src : soleil.src;
    setCurrentImage(newImage);
  };
   
  return (
    <header className="header-container">
      <h1 className="titre-header">Samuel.P</h1>
      <nav className="nav-header">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Service</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <img
        src={currentImage}
        alt="sun"
        className="header-img-darkmode"
        onClick={toggleImage}
      />
    </header>
  );
}


