"use client";
import "../styles/home.css";
import { Typewriter } from "nextjs-simple-typewriter";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Projects from "./_composant/project";
import Contact from "./_composant/contact";
import Footer from "./_composant/footer";
import nuageClaire from "../../public/asset/nuageClaire.svg";
import geek from "../../public/asset/geek.svg";
import linkedin from "../../public/asset/linkedin--v2.svg";
import github from "../../public/asset/github--v1.svg";
import react from "../../public/asset/tech/react-original-wordmark.svg";
import redux from "../../public/asset/tech/redux-original.svg";
import js from "../../public/asset/tech/javascript-original.svg";
import ts from "../../public/asset/tech/typescript-original.svg";
import html from "../../public/asset/tech/html5-original.svg";
import css from "../../public/asset/tech/css3-plain.svg";
import sass from "../../public/asset/tech/sass-original.svg";
import bootstrap from "../../public/asset/tech/bootstrap-plain.svg";
import tailwind from "../../public/asset/tech/tailwind.svg";
import git from "../../public/asset/tech/git-plain.svg";
import mongodb from "../../public/asset/tech/mongodb-plain.svg";
import nextjs from "../../public/asset/tech/nextjs-icon-512x512-y563b8iq.svg";
import vite from "../../public/asset/tech/Vitejs-logo.svg.svg";
import jest from "../../public/asset/tech/jest.svg";
import serviceLogoFront from "../../public/asset/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.svg";
import serviceLogoBack from "../../public/asset/external-backend-no-code-flaticons-flat-flat-icons.svg";
import events from "../../public/asset/projet/77events.svg";
import kasa from "../../public/asset/projet/kasa.svg";
import petitsplats from "../../public/asset/projet/lespetitsplats.svg";
import print from "../../public/asset/projet/print.svg";

export default function Home() {
  // on gere les aniamtion quand on passe sur les img geek
  const geekImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // Seuil pour img geek 
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          entry.target.classList.add("animate-up-down");
        } else {
          entry.target.classList.remove("animate-up-down");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (geekImageRef.current) {
      observer.observe(geekImageRef.current);
    }

    return () => {
      if (geekImageRef.current) {
        observer.unobserve(geekImageRef.current);
      }
    };
  }, []);

  // on gere les aniamtion quand on passe sur les technologies
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px",
      threshold: 0.9 // Seuil pour technologies
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
          entry.target.classList.add("animate-up-down");
        } else {
          entry.target.classList.remove("animate-up-down");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    techRefs.current.forEach((techRef) => {
      if (techRef) {
        observer.observe(techRef);
      }
    });

    return () => {
      techRefs.current.forEach((techRef) => {
        if (techRef) {
          observer.unobserve(techRef);
        }
      });
    };
  }, []);

  //  data pour les technologies
  const techSrc = [
    react,
    redux,
    nextjs,
    vite,
    js,
    ts,
    html,
    css,
    sass,
    bootstrap,
    tailwind,
    git,
    mongodb,
    jest,
  ];
  const nameTech = [
    "React",
    "Redux",
    "NextJs",
    "ViteJs",
    "JavaScript",
    "TypeScript",
    "Html",
    "Css",
    "Sass",
    "BootStrap",
    "Tailwind",
    "Git",
    "Mongo DB",
    "Jest",
  ];

  // on gere les aniamtion quand on passe sur les services

  const serviceRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Seuil pour les articles de service
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          entry.target.classList.add("apparition-service");
        } else {
          entry.target.classList.remove("apparition-service");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    serviceRefs.current.forEach((serviceRef) => {
      if (serviceRef) {
        observer.observe(serviceRef);
      }
    });

    return () => {
      serviceRefs.current.forEach((serviceRef) => {
        if (serviceRef) {
          observer.unobserve(serviceRef);
        }
      });
    };
  }, []);

  // Bouton pour télécharger le CV
  const handleDownload = () => {
    const filePath =
      "https://drive.google.com/file/d/1HedmwWn-pxQJf6Rq-OngYgR7U5pggIC7/view?usp=sharing";
    // Ouvrir le lien dans un nouvel onglet
    window.open(filePath, "_blank");
  };

  return (
    <main>
      {/* *********************head*************************** */}
      <section className="head" id="Accueil">
        <Image src={nuageClaire} alt="nuage" className="img-nuage" />
        <Image
          src={geek}
          alt="un geek qui dev"
          className="img-dev"
          ref={geekImageRef}
        />
        <div>
          <h2 className="titre-head">Salut, moi c'est Samuel</h2>
          <div className="typeWriter">
            <Typewriter
              words={[
                "Développeur Front-End",
                "Freelance spécialisé React",
                "Expert en Next.js",
                "Spécialiste en TypeScript",
                "Développeur freelance",
              ]}
              loop={50}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <p className="text-head">
            Je suis un développeur freelance spécialisé en React.js et Next.js,
            avec 2 ans d'expérience dans le domaine du développement web.
          </p>
          <div className="container-reseaux-head">
            <a href="https://www.linkedin.com/in/samuel-pouard/">
              <Image
                src={linkedin}
                alt="logo linkedin"
                className="logo-linkedin"
              />
            </a>
            <a href="https://github.com/samuel73000">
              <Image src={github} alt="logo github" className="logo-github" />
            </a>
          </div>

          <button className="btn-head" onClick={handleDownload}>
            Télécharger CV
          </button>
        </div>
      </section>
      {/* **********************about me******************** */}
      <section className="about-me" id="Présentation">
        <h2 className="titre-about">À propos de moi</h2>
        <article className="article-about">
          <h3 className="titre-article-about">En savoir plus sur moi</h3>
          <p className="text-article-about">
            Je suis un développeur web autodidacte et développeur d'applications
            mobiles, passionné par la création de nouvelles fonctionnalités, de
            la conception à la production. J'apporte une attention particulière
            à l'expérience utilisateur tout en écrivant un code réutilisable et
            efficace. Ma passion réside dans la combinaison du bon design, de la
            technologie et de l'innovation dans tous mes projets, que
            j'accompagne de la conception initiale jusqu'à la sortie
          </p>
        </article>
        <article className="article-about">
          <h3 className="titre-article-about">Technologies et Outils</h3>
          <p className="text-article-about">
            En utilisant une combinaison de technologies de pointe et de
            logiciels open-source fiables, je développe des applications et des
            sites web performants et centrés sur l'utilisateur pour smartphones,
            tablettes et ordinateurs de bureau.
          </p>
        </article>
        <div className="tech-about">
          {techSrc.map((tech, index) => (
            <article
              key={index}
              className="article-tech-about"
              ref={(el) => {
                if (el) {
                  techRefs.current[index] = el as HTMLDivElement;
                }
              }}
            >
              <Image
                src={tech}
                alt={`logo ${nameTech[index]}`}
                className="image-tech-about"
              />
              <p className="text-tech-about">{nameTech[index]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* **********************service******************** */}
      <section className="service" id="Services">
        <h2 className="titre-about">Services </h2>
        <h3 className="titre-article-about">Ce que je propose</h3>
        <div className="container-article-service">
          <article
            className="article-service"
            ref={(el) => {
              if (el) serviceRefs.current.push(el as HTMLDivElement);
            }}
          >
            <Image
              src={serviceLogoFront}
              alt="service logo"
              className="img-service"
            />
            <h4 className="title-article-service">
              Développement d'Applications Web
            </h4>
            <p className="text-artcile-service">
              Je mets en œuvre une variété de technologies modernes et de
              logiciels open-source fiables pour créer des applications web
              performantes et orientées utilisateur. Mon approche inclut la
              conception d'architectures robustes, l'optimisation de la
              performance et la sécurité des données, afin de fournir des
              solutions web adaptées aux besoins spécifiques de chaque projet.
            </p>
          </article>
          <article
            className="article-service"
            ref={(el) => {
              if (el) serviceRefs.current.push(el as HTMLDivElement);
            }}
          >
            <Image
              src={serviceLogoBack}
              alt="service logo"
              className="img-service"
            />
            <h4 className="title-article-service">Conception Web</h4>
            <p className="text-artcile-service">
              La conception web est bien plus qu'une simple esthétique : elle
              allie créativité et fonctionnalité pour offrir des expériences
              utilisateur exceptionnelles. En utilisant une approche centrée sur
              l'utilisateur, je crée des interfaces intuitives et attrayantes
              qui non seulement captivent, mais qui optimisent également
              l'interaction et la navigation pour les utilisateurs.
            </p>
          </article>
        </div>
      </section>
      {/* **********************project********************************** */}
      <section className="projects" id="Projets">
        <h2 className="titre-about">Projets</h2>
        <h3 className="titre-article-about">Réalisations antérieures</h3>
        <div className="container-projects">
          <Projects
            src={events}
            alt="screen de l'application 77events"
            titre="77 events"
            texte="Site d'une agence événementielle développé en React.js et CSS."
            lien="https://724events-6.netlify.app/"
          />

          <Projects
            src={kasa}
            alt="screen de l'application kasa"
            titre="Kasa"
            texte="Plateforme de réservation de logements réalisée avec React, Redux et Ts."
            lien="https://kasa-4.netlify.app/"
          />

          <Projects
            src={petitsplats}
            alt="screen de l'application les petits plats"
            titre="Les petits plats"
            texte="Site de recettes variées conçu en JavaScript, HTML et CSS."
            lien="https://les-petits-plats-sp.netlify.app/"
          />

          <Projects
            src={print}
            alt="screen de l'application print"
            titre="Print it"
            texte="Plateforme d'une agence d'impression créée avec JavaScript, HTML et CSS."
            lien="https://print-it-3.netlify.app/"
          />
        </div>
        {/* <div className="container-btn-projects">
          <button className="btn-projects-show">Voir plus</button>
        </div> */}
      </section>
      {/* **********************contacte********************************** */}
      <section className="contact" id="Contact">
        <h2 className="titre-about">Contact</h2>
        <h3 className="titre-article-about">Connectez-vous avec moi</h3>
        <p className="text-titre-contact">
          Si vous souhaitez en savoir plus sur moi ou sur mon travail, ou si
          vous souhaitez simplement dire bonjour, envoyez-moi un message.
          J'adorerais avoir de vos nouvelles.
        </p>
        <section className="container-contact-all">
          <article className="container-form">


         


            <Contact />
          </article>
          <article className="container-info">
            <h3 className="titre-info-contact">email</h3>
            <p className="text-info-contact">thosam73000@gmail.com</p>
            <h3 className="titre-info-contact">Adresse</h3>
            <p className="text-info-contact">
              101 avenue d'annecy, Lyon, France
            </p>
            <h3 className="titre-info-contact">sociale</h3>
            <div className="social-info-contact">
              <a href="https://www.linkedin.com/in/samuel-pouard/">
                <Image
                  src={linkedin}
                  alt="logo linkedin"
                  className="logo-linkedin"
                />
              </a>
              <a href="https://github.com/samuel73000">
                <Image src={github} alt="logo github" className="logo-github" />
              </a>
            </div>
          </article>
        </section>
      </section>
      {/* **********************footer********************************** */}
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}
