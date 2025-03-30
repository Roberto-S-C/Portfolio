import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function ContactForm({ setLoading, setShowAlert, setAlertStatus }) {
    const form = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const sendEmail = (data) => {
        setLoading(true)
        emailjs
            .sendForm('contact_service', 'contact_form', form.current, 'Da2dLVAv39QUas5MG')
            .then(
                () => {
                    setShowAlert(true)
                    setAlertStatus(true)
                    setLoading(false)
                },
                (error) => {
                    setShowAlert(true)
                    setAlertStatus(false)
                    setLoading(false)
                },
            );
    };

    return (
        <form
            id='contact-form'
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col gap-y-5 p-5 w-11/12 md:w-2/3 lg:w-1/3 max-h-4/5 rounded-xl border border-[#A4C3B2]"
        >

            <h2 className='text-5xl text-center font-newsreader'>Contact</h2>

            <div>
                <input
                    type="text"
                    name="user_name"
                    placeholder='Name'
                    {...register('user_name', { required: 'Name is required' })}
                    className="border border-[#CCE3DE] hover:border-[#6B9080] focus:border-[#6B9080] outline-none rounded-md p-1 w-full font-newsreader"
                />
                {errors.user_name && <p className="text-sm font-newsreader mt-1">{errors.user_name.message}</p>}
            </div>

            <div>
                <input
                    type="email"
                    name="user_email"
                    placeholder='Email'
                    {...register('user_email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email address',
                        },
                    })}
                    className="border border-[#CCE3DE] hover:border-[#6B9080] focus:border-[#6B9080] outline-none rounded-md p-1 w-full font-newsreader"
                />
                {errors.user_email && <p className="text-sm font-newsreader mt-1">{errors.user_email.message}</p>}
            </div>

            <div>
                <textarea
                    name="message"
                    placeholder='Message'
                    {...register('message', { required: 'Message is required' })}
                    className="border border-[#CCE3DE] hover:border-[#6B9080] focus:border-[#6B9080] outline-none rounded-md w-full p-1 resize-none font-newsreader"
                    rows="5"
                />
                {errors.message && <p className="text-sm font-newsreader">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                className="py-2 px-4 rounded-md text-4xl font-bold font-newsreader hover:cursor-pointer"
            >
                Send
            </button>
        </form>
    );
}

export default ContactForm;