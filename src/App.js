import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/Info/Info";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Project from "./components/projects/Project";
import Experiences from "./components/experience check/Experiences";
import About from "./components/About/About";

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
      <About />
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
