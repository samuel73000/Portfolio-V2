import "../app/styles/home.css";
import { Typewriter } from "nextjs-simple-typewriter";
import Image from "next/image";
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
import git from "../../public/asset/tech/git-plain.svg";
import mongodb from "../../public/asset/tech/mongodb-plain.svg";
export default function Home() {
  return (
    <main>
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
      <section className="about-me">
<h2 className="titre-about">About Me</h2>
<article className="article-about">
  <h3 className="titre-article-about">A bit about me</h3>
  <p className="text-article-about">I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.</p>
</article>
<article className="article-about">
  <h3 className="titre-article-about">Technologies and Tools</h3>
  <p className="text-article-about">Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
</article>
<div className="tech-about">
<article className="article-tech-about">
  <Image src={react} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">React</p>
</article>

<article className="article-tech-about">
  <Image src={redux} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">Redux</p>
</article>

<article className="article-tech-about">
  <Image src={js} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">JavaScript</p>
</article>

<article className="article-tech-about">
  <Image src={ts} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">TypeScript</p>
</article>

<article className="article-tech-about">
  <Image src={html} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">Html</p>
</article>

<article className="article-tech-about">
  <Image src={css} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">Css</p>
</article>

<article className="article-tech-about">
  <Image src={sass} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">Sass</p>
</article>

<article className="article-tech-about">
  <Image src={bootstrap} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">BootStrap</p>
</article>

<article className="article-tech-about">
  <Image src={git} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">Git</p>
</article>

<article className="article-tech-about">
  <Image src={mongodb} alt="logo react" className="image-tech-about"/>
  <p className="text-tech-about">Mongo DB</p>
</article>


</div>
      </section>
    </main>
  );
}
