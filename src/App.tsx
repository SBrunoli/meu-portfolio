import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <main>
          <Hero></Hero>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
