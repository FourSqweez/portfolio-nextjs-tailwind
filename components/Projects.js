import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = ({ projects }) => {
	//console.log('data', projects)
	return (
		<div id="projects" className="w-full px-10 py-20">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid lg:grid-cols-2 gap-8">
					{projects &&
						projects.map((project) => (
							<ProjectItem
								key={project.url}
								title={project.title}
								backgroundImg={project.image}
								projectUrl={project.url}
								tech={project.tech}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default Projects
