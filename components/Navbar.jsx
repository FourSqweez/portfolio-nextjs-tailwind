import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../public/assets/navbarLogo.png'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const navMenus = [
	{ key: '/', name: 'Home' },
	{ key: '/about', name: 'About' },
	{ key: '/skills', name: 'Skills' },
	{ key: '/project', name: 'Project' },
	{ key: '/contact', name: 'Contact' },
]

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
	}
	return (
		<div className="fixed w-full h-20 shadow-xl z-[100] ">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image src={logo} alt="/" width="80" height="80" />
				<div>
					<ul className="hidden md:flex">
						{navMenus &&
							navMenus.map((navMenu) => (
								<Link href={navMenu.key}>
									<li className="ml-10 text-sm uppercase hover:border-b">
										{navMenu.name}
									</li>
								</Link>
							))}
					</ul>
					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Small Navbar */}
			<div
				className={
					nav && 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-8 ease-in duration-500'
					}
				>
					<div>
						<div className="flex w-full justify-between items-center">
							<Image src={logo} alt="/" width="70" height="70" />
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg mb-3 shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let's build something legendary together.
							</p>
						</div>
					</div>

					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							{navMenus &&
								navMenus.map((navMenu) => (
									<Link href={navMenu.key}>
										<li className="py-4 text-sm">{navMenu.name}</li>
									</Link>
								))}
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								let's connect'
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="btn-primary">
									<FaLinkedinIn />
								</div>
								<div className="btn-primary">
									<FaGithub />
								</div>
								<div className="btn-primary">
									<AiOutlineMail />
								</div>
								<div className="btn-primary">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
