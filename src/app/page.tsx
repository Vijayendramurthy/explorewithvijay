import Education from "@/sections/Education";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Projects from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
