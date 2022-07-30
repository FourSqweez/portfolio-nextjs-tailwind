import React from 'react'
import airbnbImg from './../public/assets/projects/airbnb.jpg'
import teslaImg from './../public/assets/projects/tesla.jpg'
import moviesImg from './../public/assets/projects/movies.jpg'
import amazonImg from './../public/assets/projects/amazon.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
	return (
		<div id="projects" className="w-full px-10 py-20">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Tesla Clone"
						backgroundImg={teslaImg}
						projectUrl="/tesla"
						tech="React JS, Redux, styled-components"
					/>
					<ProjectItem
						title="Movie Hub"
						backgroundImg={moviesImg}
						projectUrl="/movies"
						tech="React JS, styled-components"
					/>
					<ProjectItem
						title="Amazon Clone"
						backgroundImg={amazonImg}
						projectUrl="/amazon"
						tech="Next JS, Redux, Tailwind"
					/>
					<ProjectItem
						title="AirBnb Clone"
						backgroundImg={airbnbImg}
						projectUrl="/airbnb"
						tech="Next JS, Tailwind"
					/>
				</div>
			</div>
		</div>
	)
}

export default Projects
