import React, { useState } from 'react'
import ContactForm from './Components/ContactForm'
import { Link } from 'react-router'
import Alert from './Components/Alert'
import { ClipLoader } from 'react-spinners'

function Contact() {

    const [showAlert, setShowAlert] = useState(false)
    const [alertStatus, setAlertStatus] = useState(false)
    const [showLoading, setLoading] = useState(false)

    return (
        <main className="relative flex flex-col justify-between items-center h-screen overflow-hidden">
            <section className="w-screen overflow-hidden">
                <div id="socials" className="flex justify-between mt-1 mx-2">
                    <Link to={"https://github.com/Roberto-S-C"} className="text-3xl font-newsreader">GitHub</Link>
                    <Link to={"https://www.linkedin.com/in/roberto-s%C3%A1nchez-c%C3%A1zares-687b54228/"} className="text-3xl font-newsreader ">LinkedIn</Link>
                </div>
            </section>

            {showAlert && <Alert showAlert={showAlert} setShowAlert={setShowAlert} status={alertStatus} />}

            {showLoading && (
                <div className="flex justify-center items-center h-full">
                    <ClipLoader color="#6B9080" size={50} />
                </div>
            )}

            {!showLoading && <ContactForm setLoading={setLoading} setShowAlert={setShowAlert} setAlertStatus={setAlertStatus} />}

            <footer id="navbar" className="w-full">
                <div className="flex justify-between mx-2">
                    <Link to="/" className="text-3xl font-newsreader ">
                        Home
                    </Link>
                    <Link to="/about" className="text-3xl font-newsreader ">
                        About
                    </Link>
                    <Link to="/projects" className="text-3xl font-newsreader ">
                        Projects
                    </Link>
                </div>
            </footer>
        </main>

    )
}

export default Contact