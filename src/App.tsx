import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Camp from "./components/Camp";
import Guide from "./components/Guide";
import Features from "./components/Features";
import GetApp from "./components/GetApp";

function App() {
  return (
    <>
      <Navbar />

      <Main>
        <Hero />
        <Camp/>
        <Guide/>
        <Features/>
        <GetApp/>

      </Main>

      <Footer />
    </>
  );
}

export default App;
