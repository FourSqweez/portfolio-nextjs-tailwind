import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const btnComponents = [
	{ icon: <FaLinkedinIn /> },
	{ icon: <FaGithub /> },
	{ icon: <AiOutlineMail /> },
	{ icon: <BsFillPersonLinesFill /> },
]

const Main = () => {
	return (
		<div className="w-full h-screen text-center">
			<div className="max-w-5xl w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						let's build something together
					</p>
					<h1>
						Hi, I'm <span className="text-[#5651e5]">Four</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[7-0%] m-auto">
						I'm a front-end web developer specializing in building (and
						occasionally designing) exceptional digital experiences.
						Currently, I'm focused on building responsive front-end web
						applications while learning back-end technologies.
					</p>
					<div className="flex items-center justify-around max-w-sm m-auto py-4">
						{btnComponents &&
							btnComponents.map((btnComponent) => (
								<div className="btn-primary hover:scale-110 p-6">
									{btnComponent.icon}
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
