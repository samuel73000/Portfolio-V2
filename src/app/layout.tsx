import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_composant/header"; 
import Home from "./_page/home"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pouard Samuel - Portfolio",
  description: "Je suis un développeur front-end React passionné, travaillant en freelance et basé à Lyon, âgé de 24 ans. Formé chez OpenClassrooms, j'ai acquis des compétences ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../../public/asset/favicon-16x16.png" />
      </head>
      <body>
        <Header /> 
        {/* <Home /> */}
        {children}
      </body>
    </html>
  );
}