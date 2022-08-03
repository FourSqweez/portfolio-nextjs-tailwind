import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../public/assets/navbarLogo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router'
import BtnSocial from './BtnSocial'
import { getAllProjects } from '../pages/lib/helper'

const navMenus = [
	{ key: '', name: 'Home' },
	{ key: 'about', name: 'About' },
	{ key: 'skills', name: 'Skills' },
	{ key: 'projects', name: 'Projects' },
	{ key: 'contact', name: 'Contact' },
]

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [navBg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('#1f2937')
	const router = useRouter()
	const project = getAllProjects(router.query.slug)
	const url = project.map((p) => p.url)
	const URL = [...url]

	//console.log('URLLL: ', `/projects/${URL}`)
	//console.log('Path: ', router)

	useEffect(() => {
		if (router.asPath == `/projects/${URL}`) {
			setNavBg('transparent')
			setLinkColor('#f8f8f8')
		} else {
			setNavBg('#ecf0f3')
			setLinkColor('#1f2937')
		}
	}, [router])

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
	}, [])

	const handleNav = () => {
		setNav(!nav)
	}
	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100]'
					: 'fixed w-full h-20 z-[100]'
			}
		>
			<div className="flex justify-center items-center w-full h-full px-10 2xl:px-16">
				<div>
					<div>
						<ul
							style={{ color: `${linkColor}` }}
							className="hidden md:flex"
						>
							{navMenus &&
								navMenus.map((navMenu) => (
									<Link key={navMenu.key} href={`/#${navMenu.key}`}>
										<li className="ml-10 p-2 text-sm uppercase hover:border-b-2 border-indigo-500">
											{navMenu.name}
										</li>
									</Link>
								))}
						</ul>
					</div>
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className="md:hidden cursor-pointer"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Small Navbar */}
			<div className={nav ? 'md:hidden back-drop' : ''}>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-8 ease-out duration-500'
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
								Let&apos;s build something legendary together.
							</p>
						</div>
					</div>

					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							{navMenus &&
								navMenus.map((navMenu) => (
									<Link key={navMenu.key} href={navMenu.key}>
										<li
											onClick={() => handleNav()}
											className="py-4 text-sm"
										>
											{navMenu.name}
										</li>
									</Link>
								))}
						</ul>
						<div className="pt-10">
							<p className="uppercase tracking-widest text-[#5651e5]">
								let&apos;s connect
							</p>
							<BtnSocial />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
