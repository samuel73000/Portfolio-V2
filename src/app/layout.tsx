import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./composant/header"; 
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
      <body className={inter.className}>
        <Header /> 
        {children}
      </body>
    </html>
  );
}