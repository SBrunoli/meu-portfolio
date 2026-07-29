import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./projects/Projects";
import Skills from "./components/Skills/Skills";

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
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
