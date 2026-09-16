import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ricko Najmudin - Full Stack & Mobile Application Developer",
  description:
    "Professional portfolio of Ricko Najmudin. Experienced in architecting and delivering high-performance Web Applications (Marketplace UMKM, SIMRS QHopes, QTOS) and Mobile Apps (PadelSpace, POS UMKM) with modern tech stacks.",
  keywords: [
    "Ricko Najmudin",
    "Full Stack Developer",
    "Mobile Developer",
    "PadelSpace",
    "Marketplace UMKM",
    "POS UMKM",
    "SIMRS",
    "React",
    "Next.js",
    "Flutter",
    "Laravel",
    "Go",
    "Node.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0d1224] text-white min-h-screen flex flex-col justify-between`}>
        <ToastContainer theme="dark" position="bottom-right" />
        <Navbar />
        <main className="flex-grow relative mx-auto w-full px-4 sm:px-8 lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[94rem]">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GTM && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        )}
      </body>
    </html>
  );
}
