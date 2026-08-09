import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Jannatul Khusbu",
  description:
    "Jannatul Khusbu is a Junior Full Stack and MERN Stack Web Developer building responsive, modern web experiences.",
  keywords: [
    "Jannatul Khusbu",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Jannatul Khusbu" }],
  creator: "Jannatul Khusbu",
  openGraph: {
    title: "Home | Jannatul Khusbu",
    description:
      "Explore Jannatul Khusbu's projects, technical skills and web development experience.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-manrope)]">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
