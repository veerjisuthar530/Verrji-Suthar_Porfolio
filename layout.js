import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import React from "react";  
export const metadata = {
  
  title: "Veerji Suthar | Full Stack Web&App Developer",
  description: "Portfolio of Veerji Suthar, a Full Stack Web Developer specializing in React.js and Next.js.",
  keywords: ["Veerji Suthar", "Front-End Developer", "React Developer", "Next.js", "Portfolio", "Web Developer", "Mobile App Developer"],
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
