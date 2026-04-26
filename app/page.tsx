import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { PainPoints } from "@/components/sections/PainPoints";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* pt-[60px] offsets the fixed navbar */}
      <main className="flex flex-col gap-12 pt-[60px]">
        <Hero />
        <Projects />
        <PainPoints />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
