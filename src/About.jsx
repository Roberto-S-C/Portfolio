import React from 'react';
import { Link } from 'react-router';

function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <main className="relative flex flex-col justify-between items-center h-screen overflow-hidden">
        <section className="w-screen overflow-hidden">
          <div id="socials" className="flex justify-between mt-1 mx-2">
            <Link to={"https://github.com/Roberto-S-C"} className="text-3xl font-light italic font-newsreader text-[#989898]">GitHub</Link>
            <Link className="text-3xl font-light italic font-newsreader text-[#989898]">Email</Link>
            <Link to={"https://www.linkedin.com/in/roberto-s%C3%A1nchez-c%C3%A1zares-687b54228/"} className="text-3xl font-light italic font-newsreader text-[#989898]">LinkedIn</Link>
          </div>
        </section>

        <div className='flex w-11/12'>
          <section className="flex flex-col justify-between items-center w-1/3">

            <img id='pfp' className='w-4/5 mt-4' src='/person.jpg' />

            <h2
              id="name"
              className="text-4xl font-light mt-3 font-newsreader text-[#989898]"
            >
              ROBERTO SANCHEZ
            </h2>
          </section>

          <section id='about' className="flex flex-col justify-center items-center w-2/3 h-full">
            <h1 className="text-4xl font-light mb-2 font-newsreader text-[#989898]">ABOUT ME</h1>
            <div className='flex flex-col justify-between w-11/12 h-4/5'>
              <p className="text-4xl text-justify font-light font-newsreader text-[#989898] mt-4 leading-relaxed">
                I have expirience buliding Full Stack Web Applications using
                <b><i> React</i></b>, <b><i>ASP .Net Core</i></b>, <b><i>SQL</i></b>,
                <b><i> HTML</i></b>, <b><i>CSS</i></b> and <b><i>JavaScript</i></b>.
                I enjoy developing software because it allows me to create anything I want.
              </p>
              <p className="text-4xl font-light font-newsreader text-[#989898] leading-relaxed">
                My hobbies are <b><i>reading</i></b>, <b><i>exercising</i></b>, and playing the <b><i>guitar</i></b>.
              </p>
              <p className="text-4xl font-light font-newsreader text-[#989898] leading-relaxed">
                I'm on my last year of college and I live in <b><i>Guadalajara</i></b>, <b><i>México</i></b>.
              </p>
            </div>
          </section>
        </div>

        <footer id="navbar" className="w-full mt-8">
          <div className="flex justify-between mt-1 mx-2">
            <Link to="/" className="text-3xl font-light italic font-newsreader text-[#989898]">
              Home
            </Link>
            <Link to="/projects" className="text-3xl font-light italic font-newsreader text-[#989898]">
              Projects
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default About;