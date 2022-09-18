import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
	return (
		<div className="relative flex items-center mx-auto justify-center h-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#79c07b] to-[#caffb5] p-2">
			<Image
				className="rounded-xl group-hover:opacity-10"
				src={backgroundImg}
				alt="/"
				height="300px"
				width="550px"
				priority
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-1xl md:tex-4xl sm:text-3xl lg:text-4xl text-white tracking-wider text-center ">
					{title}
				</h3>
				<p className="p-1 pt-2 text-white text-center text-xs sm:text-2xl lg:text-[1.2rem]">
					{tech}
				</p>

				<Link
					href={{
						pathname: '/projects/[slug]',
						query: { slug: `${projectUrl}` },
					}}
				>
					<p className="text-center mt-2 py-3 rounded-lg bg-white text-gray-700 font-bold text-xs sm:text-lg md:text-2xl cursor-pointer">
						More Info
					</p>
				</Link>
			</div>
		</div>
	)
}

export default ProjectItem
