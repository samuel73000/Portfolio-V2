import { Inter } from "next/font/google";
import Header from "./_composant/header";
import Script from "next/script";
import Home from "./page/page"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LSS5Y57MSS"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LSS5Y57MSS');
            `,
          }}
        />
        <meta name="robots" content="index"/>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://i.postimg.cc/nLc7BX1X/favicon-16x16.png"
        />
        <title>Pouard Samuel - Portfolio</title>
        <meta
          name="description"
          content="Je suis un développeur front-end React passionné, travaillant en freelance et basé à Lyon, âgé de 24 ans. Formé chez OpenClassrooms, j'ai acquis des compétences ..."
        />
        <meta
          property="og:title"
          content="Freelance Développeur Front-End React | Samuel Pouard"
        />
        <meta name="article:section" content="Développement web" />
        <meta
          name="article:tag"
          content="freelance développeur front-end, React, Samuel Pouard, développeur web, création de site web"
        />
        <meta name="copyright" content="Samuel Pouard" />
        <meta property="og:type" content="website" />
        <meta name="geo.placename" content="Lyon, France" />
        <meta name="geo.position" content="45.764043;4.835659" />
        <meta name="geo.region" content="FR" />
        <meta
          property="og:description"
          content="Freelance développeur front-end spécialisé en React, Samuel Pouard. Expert dans la création de sites web sur mesure. Contactez-moi pour vos projets de développement web."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta http-equiv="Content-Language" content="fr" />
        <link rel="canonical" href="https://pouardsamuel.fr/" />
        <meta name="author" content="Samuel Pouard" />
        <meta
          name="description"
          content="Freelance développeur front-end spécialisé en React, Samuel Pouard, expert dans la création de sites web. Contactez-moi pour vos projets de développement web."
        />
        <meta
          name="keywords"
          content="freelance développeur front end, React, Samuel Pouard, pouard samuel, développeur web, création de site web"
        />
      </head>
      <body>
        <Header />
        {/* <Home /> */}

        
        {children}
      </body>
    </html>
  );
}




