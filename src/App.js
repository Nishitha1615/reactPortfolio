import Nav from "./Components/NavBar/Nav";
import About from "./Components/Intro/about";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";


function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <section id="#projects">
          <Project/>
        </section>
        <section id="#projects">
          <Contact/>
        </section>
    </div>
  );
}

export default App;
