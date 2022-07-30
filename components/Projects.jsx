import React from 'react'
import AirbnbImg from '/public/airbnb.jpg'
import TeslaImg from '/public/tesla.jpg'
import MoviesImg from '/public/movies.jpg'
import AmazonImg from '/public/amazon.jpg'
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
						backgroundImg={TeslaImg}
						projectUrl="/tesla"
						tech="React JS, Redux, styled-components"
					/>
					<ProjectItem
						title="Movie Hub"
						backgroundImg={MoviesImg}
						projectUrl="/movies"
						tech="React JS, styled-components"
					/>
					<ProjectItem
						title="Amazon Clone"
						backgroundImg={AmazonImg}
						projectUrl="/amazon"
						tech="Next JS, Redux, Tailwind"
					/>
					<ProjectItem
						title="AirBnb Clone"
						backgroundImg={AirbnbImg}
						projectUrl="/airbnb"
						tech="Next JS, Tailwind"
					/>
				</div>
			</div>
		</div>
	)
}

export default Projects
