import InputForm from '@/components/contact-us/form-input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ContactUsForm() {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFullName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
    };

    return (
        <section>
            <div>
                {submitted && (
                    <div className="my-8">
                        <div className="flex bg-secondary-yellow rounded-md shadow-md items-center p-3">
                            <Image src="/about/membership/Icon-include.svg" width={20} height={20} alt="Info" />
                            <p className="ml-3"><strong>Thanks for submitting: </strong>We will get back to you soon.</p>
                            <button className="ml-auto" onClick={() => setSubmitted(false)}>
                                <Image src="/Close.svg" width={20} height={20} alt="Close" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-start mb-8">
                <h2 className="text-6xl font-semibold mb-8">Get in touch</h2>
                <p className="text-xl w-1/2">
                    Have any questions, concerns, or need assistance? Fill out the form
                    below and one of our representatives will reach out to you in a
                    timely manner.
                </p>
            </div>
            <div className="flex flex-row items-start">
                <div className="mb-10 md:mb-0 md:mr-10 w-full md:w-1/2">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <InputForm
                            field={{
                                type: "text",
                                name: "fullName",
                                label: "Name",
                            }}
                            onChange={(e: any) => setFullName(e.target.value)}
                            text={fullName}
                            error={""}
                        />
                        <InputForm
                            field={{
                                type: "email",
                                name: "email",
                                label: "Email",
                            }}
                            onChange={(e: any) => setEmail(e.target.value)}
                            text={email}
                            error={""}
                        />
                        <InputForm
                            field={{
                                type: "textarea",
                                name: "Message",
                                label: "Comment or message",
                            }}
                            onChange={(e: any) => setMessage(e.target.value)}
                            text={message}
                            error={""}
                            numRows={7}
                        />
                        <div>
                            <button
                                className="w-full text-center bg-primary-purple py-3 rounded-3xl text-[12px] text-white font-semibold 2xl:py-5 2xl:rounded-full"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-yellow-500 w-full md:w-1/3 rounded-2xl text-primary-brown">
                    <div className="p-5 font-medium">
                        <div className="flex mb-5">
                            <Image src="/Info.svg" width={25} height={100} alt="Info" />
                            <h3 className="text-4xl font-semibold ml-4">Contact info</h3>
                        </div>
                        <hr className="border-primary-brown mb-5 h-1" />
                        <p className="text-lg">SEND YOUR LETTERS OR DONATIONS TO</p>
                        <p className="text-lg mb-4">P.O. Box 452 Redan Georgia 30074</p>
                        <p className="text-lg">CALL US TO</p>
                        <p className="text-lg mb-4">+1 678.369.3748</p>
                        <p className="text-lg">EMAIL US AT:</p>
                        <p className="text-lg mb-5">info@theDonovan.org</p>
                        <hr className="border-primary-brown mb-5 h-1" />
                        <p className="text-lg">FOLLOW US ON OUR SOCIAL MEDIA</p>
                        <div className="flex space-x-3 mt-4">
                            <a
                                href="#"
                                className="w-15 h-15 rounded-full flex items-center justify-center text-white hover:bg-purple-800 transition duration-300"
                            >
                                <Image
                                    src="/footer/Twitter.svg"
                                    width={40}
                                    height={40}
                                    alt="Twitter"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-15 h-15 rounded-full flex items-center justify-center text-white hover:bg-purple-800 transition duration-300"
                            >
                                <Image
                                    src="/footer/Facebook.svg"
                                    width={40}
                                    height={40}
                                    alt="Twitter"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-15 h-15 rounded-full flex items-center justify-center text-white hover:bg-purple-800 transition duration-300"
                            >
                                <Image
                                    src="/footer/Youtube.svg"
                                    width={40}
                                    height={40}
                                    alt="Twitter"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
