import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RecentProject from "./components/RecentProject";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Skills />
      <About />
      <RecentProject />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
