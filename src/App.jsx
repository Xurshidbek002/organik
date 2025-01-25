import "./App.css";
import About from "./components/about/About";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Shop from "./components/shop/Shop";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <>
      <Header />
      <Section />
      <About/>
      <Shop/>
      <Content />
      <Toggle />
      <Footer />
    </>
  );
}

export default App;
