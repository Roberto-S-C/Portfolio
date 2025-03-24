import { Link } from "react-router";

function App() {
  return (
    <div
      className="flex justify-center items-center w-full min-h-screen"
    >
      <main className="relative flex flex-col container min-h-screen">
        <section className="flex flex-col justify-center items-center flex-grow">
          <h1
            className="text-center text-9xl font-extralight font-newsreader text-slate-500"
          >
            Roberto SANCHEZ
          </h1>
          <h3
            className="text-center text-4xl font-newsreader text-slate-500"
          >
            Software Developer
          </h3>
        </section>

        <footer className="flex justify-around w-full">
          <Link className="text-2xl text-slate-400 font-newsreader">About</Link>
          <Link className="text-2xl text-slate-400 font-newsreader">Projects</Link>
          <Link className="text-2xl text-slate-400 font-newsreader">Contact</Link>
        </footer>
      </main>
    </div>
  );
}

export default App;
