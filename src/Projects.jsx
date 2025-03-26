import React from 'react'
import { Link } from 'react-router'

function Projects() {
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

                <section className='flex w-11/12'>
                    <div id='video' className='w-1/2 border m-1 border-slate-300'>
                        <video autoPlay loop muted className="w-full h-full object-cover">
                            <source
                                src="ActiveX.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video.
                        </video>
                    </div>


                    <div id='ActiveX' className='flex flex-col justify-between w-3/5 h-full m-2'>
                        <Link className="text-center text-5xl font-light font-newsreader text-[#989898]">ActiveX</Link>
                        <ul className='flex justify-center flex-wrap gap-y-2 gap-x-8 w-full'>
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>React</li> 
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>ASP .Net Core</li> 
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>SQL Server</li> 
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>HTML</li> 
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>CSS</li> 
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>JavaScript</li> 
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>Three JS</li> 
                            <li className='text-3xl italic font-light font-newsreader text-[#989898]'>Stripe</li> 
                        </ul> 
                        <p className='text-3xl text-justify font-light font-newsreader text-[#989898]'>
                            Sports E-Commerce platform with 3D products to enhance customer experice.
                        </p>
                    </div>
                </section>

                <footer id="navbar" className="w-full mt-8">
                    <div className="flex justify-between mt-1 mx-2">
                        <Link to="/" className="text-3xl font-light italic font-newsreader text-[#989898]">
                            Home
                        </Link>
                        <Link to="/about" className="text-3xl font-light italic font-newsreader text-[#989898]">
                            About
                        </Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default Projects