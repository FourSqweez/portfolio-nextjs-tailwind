import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '../public/assets/contact.jpg'
import BtnSocial from './BtnSocial'

const Contact = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		if (name || phone || email || subject || message !== '') {
			setName(e.target.value)
			setPhone(e.target.value)
			setEmail(e.target.value)
			setSubject(e.target.value)
			setMessage(e.target.value)
		} else {
		}
	}

	return (
		<div id="contact" className="w-full lg:h-screen px-10 py-20">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full ">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={ContactImg}
									alt="/"
								/>
							</div>
							<div>
								<h2 className="py-2">Jeerasak Krueaniam</h2>
								<p>Front-End Developer</p>
								<p className="py-4">
									I&apos;am available for freelance or full-time positions.
									Contact me and let&apos;s talk.
								</p>
								<p>Tel: 083-7543842</p>
								<p>Line ID: Four7518</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect With Me</p>
								<BtnSocial />
							</div>
						</div>
					</div>

					{/* right */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form
								onSubmit={(e) => handleSubmit(e)}
								action="https://getform.io/f/f83889a1-657a-47b1-baca-7eeef573c3f3"
								method="POST"
								encType="multipart/form-data"
								target="_blank"
							>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Name
										</label>
										<input
											required
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											name="name"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											required
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="tel"
											id="phone"
											name="phone"
											value={phone}
											placeholder="123-45-678"
											pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
											onChange={(e) => setPhone(e.target.value)}
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">
										Email
									</label>
									<input
										required
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										name="email"
										placeholder="example@gmail.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">
										Subject
									</label>
									<input
										required
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										name="subject"
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">
										Message
									</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										rows="10"
										name="message"
										value={message}
										required
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<a>
							<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
								<HiOutlineChevronDoubleUp
									className="text-[#5651e5]"
									size={30}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
