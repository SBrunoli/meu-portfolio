import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <main>
          <Hero></Hero>
          <About />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
