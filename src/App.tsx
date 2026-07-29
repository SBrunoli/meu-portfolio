import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills/Skills";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <main>
          <Hero></Hero>
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
