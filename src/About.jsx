import React from 'react';
import { Link } from 'react-router';

function About() {
  return (
    <main className="relative flex flex-col justify-between items-center h-screen overflow-hidden">
      <section className="w-screen overflow-hidden">
        <div id="socials" className="flex justify-between mt-1 mx-2">
          <Link to={"https://github.com/Roberto-S-C"} className="text-3xl font-newsreader">GitHub</Link>
          <Link to={"/contact"} className="text-3xl font-newsreader">Contact</Link>
          <Link to={"https://www.linkedin.com/in/roberto-s%C3%A1nchez-c%C3%A1zares-687b54228/"} className="text-3xl font-newsreader ">LinkedIn</Link>
        </div>
      </section>

      <h2 id='name' className='hidden lg:inline-block text-5xl font-bold italic font-newsreader'>ROBERTO SANCHEZ</h2>

      <div className='flex flex-col lg:flex-row justify-center h-4/5 lg:h-auto'>
        <section className="flex flex-col justify-between items-center w-full lg:w-1/3">
          <img id='pfp' className='w-4/5 md:w-2/3 lg:w-4/5' src='/person.JPG' />
          <h3 id='name' className='mt-3 text-4xl md:text-6xl lg:hidden font-bold italic font-newsreader'>ROBERTO SANCHEZ</h3>
        </section>

        <section id='about' className="flex flex-col justify-center items-center w-full lg:w-3/5 lg:h-full mt-3 lg:mt-0">
          <div className='flex flex-col justify-around w-11/12 lg:h-11/12'>
            <p className="text-2xl md:text-3xl lg:text-4xl text-justify  font-newsreader leading-relaxed">
              I have experience buliding Full Stack Web Applications using <b>React</b>, <b>.Net Core</b>, <b>SQL</b>, <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl  font-newsreader  leading-relaxed mt-5">
              I'm on my last year of college and live in Guadalajara, México.
            </p>
          </div>
        </section>
      </div>

      <footer id="navbar" className="w-full">
        <div className="flex justify-between mx-2">
          <Link to="/" className="text-3xl font-newsreader ">
            Home
          </Link>
          <Link to="/projects" className="text-3xl font-newsreader ">
            Projects
          </Link>
        </div>
      </footer>
    </main>
  );
}

export default About;