import React from 'react'
import BtnSocial from './BtnSocial'

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center px-10">
			<div className="max-w-5xl w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						let's build something together
					</p>
					<h1>
						Hi, I&apos;m <span className="text-[#5651e5]">Four</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[7-0%] m-auto">
						I&apos;m a front-end web developer specializing in building exceptional digital experiences.
						Currently, I&apos;m focused on building responsive front-end web
						applications while learning back-end technologies.
					</p>
					<BtnSocial/>
				</div>
			</div>
		</div>
	)
}

export default Main
