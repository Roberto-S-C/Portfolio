import React from 'react'
import { Link } from 'react-router'

function Projects() {
    return (
        <main className="relative flex flex-col justify-between items-center h-screen overflow-hidden">
            <section className="w-screen overflow-hidden">
                <div id="socials" className="flex justify-between mt-1 mx-2">
                    <Link to={"https://github.com/Roberto-S-C"} className="text-3xl font-newsreader">GitHub</Link>
                    <Link to={"/contact"} className="text-3xl font-newsreader">Contact</Link>
                    <Link to={"https://www.linkedin.com/in/roberto-s%C3%A1nchez-c%C3%A1zares-687b54228/"} className="text-3xl font-newsreader">LinkedIn</Link>
                </div>
            </section>

            <h2 id='title' className="text-center text-5xl font-bold font-newsreader">ActiveX</h2>

            <section className='flex flex-col lg:flex-row items-center w-11/12 h-3/4 lg:h-auto'>
                <div id='video' className='flex justify-center w-full lg:w-1/2 mx-2'>
                    <video autoPlay loop muted className="w-full object-cover">
                        <source
                            src="ActiveX.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video.
                    </video>
                </div>

                <div id='ActiveX' className='flex flex-col justify-around w-full lg:w-1/2 h-full gap-3 mx-2'>
                    <ul className='flex justify-center flex-wrap gap-8 w-full mt-3 lg:mt-0'>
                        <img src='React.webp' className='size-16 md:size-20 lg:size-24' />
                        <img src='html.webp' className='size-16 md:size-20 lg:size-24' />
                        <img src='css.webp' className='size-16 md:size-20 lg:size-24' />
                        <img src='js.webp' className='size-16 md:size-20 lg:size-24' />
                        <img src='NET.webp' className='size-16 md:size-20 lg:size-24' />
                        <img src='stripe.webp' className='size-16 md:size-20 lg:size-24' />
                        <img src='sqlserver.webp' className='size-16 md:size-20 lg:size-24' />
                        <img src='threejs.webp' className='size-16 md:size-20 lg:size-24' />
                    </ul>
                    <p className='text-2xl md:text-3xl lg:text-4xl text-justify font-newsreader'>
                        Sports E-Commerce platform with 3D products to enhance customer experice.
                    </p>
                </div>
            </section>

            <footer id="navbar" className="w-full">
                <div className="flex justify-between mx-2">
                    <Link to="/" className="text-3xl font-newsreader">
                        Home
                    </Link>
                    <Link to="/about" className="text-3xl font-newsreader">
                        About
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default Projects