import Image from 'next/image'
import React from 'react'
import { data } from '../public/resumeData'

const Skills = () => {
	const skills = data.resume.skills

	return (
		<div id="skills" className="w-full lg:h-screen p-2 px-10 mt-16">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest pt-10 uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{skills &&
						skills.map((skill) => (
							<div
								key={skill.name}
								className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
							>
								<div className="grid grid-cols-2 gap-4 justify-center items-center">
									<div className="m-auto">
										<Image
											src={skill.img}
											width="64px"
											height="64px"
											alt="/"
											priority
										/>
									</div>
									<div className="flex flex-col items-center justify-center">
										<h3>{skill.name}</h3>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default Skills
