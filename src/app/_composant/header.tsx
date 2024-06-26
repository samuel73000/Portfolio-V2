"use client";
import "../../styles/header.css";
import { useState, useEffect, useRef } from "react";
import soleil from "../../../public/asset/external-sun-lighting-flaticons-flat-flat-icons.png";
import lune from "../../../public/asset/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png";
import nuageClaire from "../../../public/asset/nuageClaire.png";
import nuageSombre from "../../../public/asset/nuageDark.png";

export default function Header() {
  const [currentImageLune, setCurrentImageLune] = useState(soleil.src);
  const sections = ["Accueil", " À propos", "Services", "Projets", "Contact"];
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const applyDarkMode = () => {
    document.querySelector(".header-container")?.classList.add("header-dark");
    document.querySelector(".titre-header")?.classList.add("titre-header-dark");
    document.querySelectorAll(".nav-header-a").forEach(navHeader => {
      navHeader.classList.add("titre-header-dark");
    });
    document.querySelector(".img-nuage")?.setAttribute("srcset", nuageSombre.src);
    document.querySelector(".titre-head")?.classList.add("titre-header-dark");
    document.querySelector(".text-head")?.classList.add("titre-header-dark");
    document.querySelector(".about-me")?.classList.add("about-me-dark");
    document.querySelectorAll(".titre-about").forEach(titre => {
      titre.classList.add("titre-header-dark");
    });
    document.querySelectorAll(".text-article-about").forEach(text => {
      text.classList.add("titre-header-dark");
    });
    document.querySelector(".service")?.classList.add("service-dark");
    document.querySelector(".projects")?.classList.add("about-me-dark");
    document.querySelector(".contact")?.classList.add("service-dark");
    document.querySelectorAll(".titre-info-contact").forEach(titre => {
      titre.classList.add("titre-header-dark");
    });
    document.querySelector(".footer")?.classList.add("header-dark");
    document.querySelector(".copyright")?.classList.add("titre-header-dark");
  };

  const removeDarkMode = () => {
    document.querySelector(".header-container")?.classList.remove("header-dark");
    document.querySelector(".titre-header")?.classList.remove("titre-header-dark");
    document.querySelectorAll(".nav-header-a").forEach(navHeader => {
      navHeader.classList.remove("titre-header-dark");
    });
    document.querySelector(".img-nuage")?.setAttribute("srcset", nuageClaire.src);
    document.querySelector(".titre-head")?.classList.remove("titre-header-dark");
    document.querySelector(".text-head")?.classList.remove("titre-header-dark");
    document.querySelector(".about-me")?.classList.remove("about-me-dark");
    document.querySelectorAll(".titre-about").forEach(titre => {
      titre.classList.remove("titre-header-dark");
    });
    document.querySelectorAll(".text-article-about").forEach(text => {
      text.classList.remove("titre-header-dark");
    });
    document.querySelector(".service")?.classList.remove("service-dark");
    document.querySelector(".projects")?.classList.remove("about-me-dark");
    document.querySelector(".contact")?.classList.remove("service-dark");
    document.querySelectorAll(".titre-info-contact").forEach(titre => {
      titre.classList.remove("titre-header-dark");
    });
    document.querySelector(".footer")?.classList.remove("header-dark");
    document.querySelector(".copyright")?.classList.remove("titre-header-dark");
  };

  const toggleImage = () => {
    const newImageLune = currentImageLune === soleil.src ? lune.src : soleil.src;
    setCurrentImageLune(newImageLune);

    if (newImageLune === lune.src) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start: number | null = null;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
          const y = startPosition + distance * easeInOutQuad(progress / duration);
          window.scrollTo(0, y);
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      }
    };

    navRefs.current.forEach(anchor => {
      anchor?.addEventListener('click', handleClick);
    });

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const navItem = document.querySelector(`a[href="#${id}"]`);
        if (entry.isIntersecting) {
          navItem?.classList.add("active-a");
        } else {
          navItem?.classList.remove("active-a");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navRefs.current.forEach(anchor => {
        anchor?.removeEventListener('click', handleClick);
      });
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="header-container">
      <h1 className="titre-header">Samuel.P</h1>
      <nav className="nav-header">
        {sections.map((section, index) => (
          <a
            key={section}
            href={`#${section}`}
            className="nav-header-a"
            ref={el => {
              navRefs.current[index] = el;
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
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


