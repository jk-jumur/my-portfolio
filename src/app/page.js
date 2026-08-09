import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import HeroSection from "@/components/Hero";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div>
       
        <HeroSection/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
    </div>
  );
}
