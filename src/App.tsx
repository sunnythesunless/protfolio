import { useEffect, useRef } from "react";
import {
  Navbar,
  Hero,
  TechMarquee,
  BentoProjects,
  Timeline,
  Skills,
  Footer,
} from "./components";

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && dot) {
        cursor.style.left = `${e.clientX - 10}px`;
        cursor.style.top = `${e.clientY - 10}px`;
        dot.style.left = `${e.clientX - 3}px`;
        dot.style.top = `${e.clientY - 3}px`;
      }
    };

    const handleHover = () => cursor?.classList.add("cursor-grow");
    const handleLeave = () => cursor?.classList.remove("cursor-grow");

    document.addEventListener("mousemove", moveCursor);

    // Add hover effect to interactive elements
    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor hidden lg:block" />
      <div ref={cursorDotRef} className="cursor-dot hidden lg:block" />

      {/* Noise overlay */}
      <div className="noise" />

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <BentoProjects />
        <Skills />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
}

export default App;
