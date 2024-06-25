import "../styles/home.css";
import { Typewriter } from "nextjs-simple-typewriter";
import Image from "next/image";
import Projects from "./_composant/project";
import Contact from "./contact";
import nuageClaire from "../../public/asset/nuageClaire.png";
import geek from "../../public/asset/geek.svg";
import linkedin from "../../public/asset/linkedin--v2.png";
import github from "../../public/asset/github--v1.png";
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
import nextjs from "../../public/asset/tech/nextjs-icon-512x512-y563b8iq.png";
import vite from "../../public/asset/tech/Vitejs-logo.svg.png";
import jest from "../../public/asset/tech/jest.svg";
import serviceLogoFront from "../../public/asset/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png";
import serviceLogoBack from "../../public/asset/external-backend-no-code-flaticons-flat-flat-icons.png";



export default function Home() {
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

 
  

  return (
    <main>
      {/* *********************head*************************** */}
      <section className="head">
        <Image src={nuageClaire} alt="nuage" className="img-nuage" />
        <Image src={geek} alt="un geek qui dev" className="img-dev" />
        <div>
          <h2 className="titre-head">Hi, I am Samuel </h2>
          <div className="typeWriter">
            <Typewriter
              words={[
                "Développeur Front-End",
                "Développeur freelance ",
                "expert en React.js , Next.js",
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
            I am a Front-End / Full-Stack Developer. I am currently working at
            CloudStok Technologies as a Front-End Developer
          </p>
          <div className="container-reseaux-head">
            <a href="#">
              <Image src={linkedin} alt="logo linkedin" />
            </a>
            <a href="#">
              <Image src={github} alt="logo github" />
            </a>
          </div>
          <button className="btn-head">Resume</button>
        </div>
      </section>
      {/* **********************about me******************** */}
      <section className="about-me">
        <h2 className="titre-about">About Me</h2>
        <article className="article-about">
          <h3 className="titre-article-about">A bit about me</h3>
          <p className="text-article-about">
            I'm a self-taught web developer and Mobile App Developer with
            experience in designing new features from ideation to production,
            implementation of wireframes and design flows into high performance
            software applications. I take into consideration the user experience
            while writing reusable and efficient code. I passionately combine
            good design, technology, and innovation in all my projects, which I
            like to accompany from the first idea to release.Currently, I'm
            focused on the backend development.
          </p>
        </article>
        <article className="article-about">
          <h3 className="titre-article-about">Technologies and Tools</h3>
          <p className="text-article-about">
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant apps and
            websites for smartphones, tablets, and desktops.
          </p>
        </article>
        <div className="tech-about">
          {techSrc.map((tech, index) => (
            <article key={index} className="article-tech-about">
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
      <section className="service">
        <h2 className="titre-about">Services</h2>
        <h3 className="titre-article-about">What I Provide</h3>
        <div className="container-article-service">
          <article className="article-service">
            <Image
              src={serviceLogoFront}
              alt="service logo"
              className="img-service"
            />
            <h4 className="title-article-service">
              Web Application Development
            </h4>
            <p className="text-artcile-service">
              Web design encompasses many different skills and disciplines in
              the production and maintenance of websites. The different areas of
              web design include web graphic design user interface design
              authoring, including standardised code and proprietary software
              user experience design and search engine
            </p>
          </article>
          <article className="article-service">
            <Image
              src={serviceLogoBack}
              alt="service logo"
              className="img-service"
            />
            <h4 className="title-article-service">Backend Development</h4>
            <p className="text-artcile-service">
              Graphic design is a craft where professionals create visual
              content to communicate messages. By applying visual hierarchy and
              page layout techniques, designers use typography and pictures to
              meet users' specific needs and focus on the logic of displaying
              elements in interactive designs, to optimize the user experience.
            </p>
          </article>
        </div>
      </section>
      {/* **********************project********************************** */}
      <section className="projects">
        <h2 className="titre-about">Projects</h2>
        <h3 className="titre-article-about">What I Built</h3>
        <div className="container-projects">
          <Projects
            src={nuageClaire}
            alt="fsd"
            titre="Noteworthy technology acquisitions 2021"
            texte="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Projects
            src={nuageClaire}
            alt="fsd"
            titre="Noteworthy technology acquisitions 2021"
            texte="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Projects
            src={nuageClaire}
            alt="fsd"
            titre="Noteworthy technology acquisitions 2021"
            texte="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Projects
            src={nuageClaire}
            alt="fsd"
            titre="Noteworthy technology acquisitions 2021"
            texte="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />
        </div>
        <div className="container-btn-projects">
          <button className="btn-projects-show">Show More</button>
        </div>
      </section>
      {/* **********************contacte********************************** */}
      <section>
<Contact/>

  

      </section>
    </main>
  );
}
