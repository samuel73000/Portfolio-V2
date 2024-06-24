import "../../styles/header.css"
import Image from 'next/image';
import soleil from "../../../public/asset/external-sun-lighting-flaticons-flat-flat-icons.png"
export default function Header() {
  return (
    <header className="header-container" >
        <h1 className="titre-header">Samuel.P</h1>
        <nav className="nav-header">
            <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Service</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
        </nav>
        <Image src={soleil} alt="sun" className="header-img-darkmode" />
    </header>
  );
}