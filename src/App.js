import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills/Skills";
import Info from "./components/Info/Info";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Servicess from "./components/Check/Servicess";
import Project from "./components/projects/Project";
import Experiences from "./components/experience check/Experiences";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Info />
      <Servicess />
      <Project />
      <Experience />
      <Experiences />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
