import { Link } from "react-router";

function App() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full"
    >
      <main className="relative flex flex-col h-screen overflow-hidden">
        <section className="w-screen overflow-hidden">
          <div id="socials" className="flex justify-between mt-1 mx-2">
            <Link to={"https://github.com/Roberto-S-C"} className="text-3xl font-newsreader">GitHub</Link>
            <Link to={"/contact"} className="text-3xl font-newsreader">Contact</Link>
            <Link to={"https://www.linkedin.com/in/roberto-s%C3%A1nchez-c%C3%A1zares-687b54228/"} className="text-3xl font-newsreader text-[#989898]">LinkedIn</Link>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center flex-grow overflow-hidden">
          <h1
            id="title"
            className="text-center text-4xl md:text-7xl lg:text-8xl font-newsreader"
          >
            Roberto SANCHEZ
          </h1>
          <h3
            id="career"
            className="text-center text-2xl md:text-4xl font-newsreader"
          >
            Software Developer
          </h3>
        </section>

        <footer id="navbar" className="w-full">
          <div className="flex justify-between mx-2">
            <Link to={"about"} className="text-3xl font-newsreader">About</Link>
            <Link to={"projects"} className="text-3xl font-newsreader">Projects</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
