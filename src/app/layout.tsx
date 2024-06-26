import { Inter } from "next/font/google";
import Header from "./_composant/header";
const inter = Inter({ subsets: ["latin"] });
import fav from "../../public/favicon-16x16.png";


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
        <link rel="icon" href="https://i.postimg.cc/nLc7BX1X/favicon-16x16.png" />
        <title>Pouard Samuel - Portfolio</title>
        <meta
          name="description"
          content="Je suis un développeur front-end React passionné, travaillant en freelance et basé à Lyon, âgé de 24 ans. Formé chez OpenClassrooms, j'ai acquis des compétences ..."
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
