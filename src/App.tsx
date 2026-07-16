import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
      </ThemeProvider>
    </>
  );
}

export default App;
