import Image from "next/image";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
    </div>
  );
}
