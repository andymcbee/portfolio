import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMeBlurb } from "./components/AboutMeBlurb";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { FooterContact } from "./components/FooterContact";
function App() {
  return (
    <>
      <div className="flex flex-col gap-5 items-center bg-[#0a192f] min-h-screen">
        <Navbar />
        <Hero />
        <div className="sectionHeader">Skills</div>
        <Skills />

        <div className="sectionHeader">Get to Know Me</div>
        <AboutMeBlurb />

        <div className="sectionHeader">Projects</div>
        <Project />
        <Project />
        <Project />

        <div className="sectionHeader">Experience</div>
        <Experience />
        <Experience />
        <Experience />
        <FooterContact />
      </div>
    </>
  );
}

export default App;
