import React from 'react'
import Image from 'next/image'
import Profile from '../public/images/profile.jpg'

const About = () => {
	return (
		<div
			id="about"
			className="w-full md:h-screen px-10 items-center lg:py-40"
		>
			<div className="max-w-5xl m-auto md:grid grid-cols-3 gap-8">
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 p-4 mb-20 xs:mb-0 ease-in duration-300">
					<Image
						className="rounded-xl"
						src={Profile}
						alt="test"
						width={550}
						height={850}
					/>
				</div>
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						Hello I'm Jeerasak Krueaniam and you can call me Four
					</p>
					<p className="py-2 text-gray-600 indent-10">
						I graduated from Khon Kaen University. Computer Science
					</p>
					<p className="py-2 text-gray-600 indent-10">
						I want to be a front-end developer and in the future I want to
						be a fullstack developer. Now I can use React js, Next js for
						front-end in javascript while study typscript.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
