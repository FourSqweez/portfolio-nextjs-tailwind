import React from 'react'
import Image from 'next/image'
import Profile from '../public/images/profile.jpg'

const About = () => {
	return (
		<div
			id="about"
			className="w-full md:h-screen px-10 items-center lg:py-28"
		>
			<div className="max-w-5xl m-auto md:grid grid-cols-3 gap-8">
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 p-4 mb-20 xs:mb-0 ease-in duration-300">
					<Image
						className="rounded-xl"
						src={Profile}
						alt="test"
						width={550}
						height={850}
						priority
					/>
				</div>
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						Hello I&apos;m Jeerasak Krueaniam and you can call me Four!
					</p>
					<p className="py-2 text-gray-600 indent-10">
						I graduated with a Computer Science major from Khon Kaen
						University.
					</p>
					<p className="py-2 text-gray-600 indent-10">
						I want to be a front-end developer and in the future, I want
						to be a full-stack developer. Now I can use React js, Next js
						for front-end in javascript while studying typescript. I have
						a lot of libraries that I'm interested like webGL,web3, 3D,
						and Animation but now I just want to get my first job. I have
						done a lot of projects that I try to practice but it feels
						like it's not the real project so I want to do the real
						project haha.
					</p>
					<p className="py-2 text-gray-600 indent-10">
						Coding is so funny? Yeah, it's so funny when I discover a new
						way that I can shortly write good code and still have the best
						performant. I like to compare the library and choose what is
						the best so it so funny I think the language that most
						important is not programming language but it is English
						because nowadays it has a lot of languages or libraries and
						yeah it has good documents too so if we want to do something
						we just read the document. And the most thing that I like is
						when I can discuss code with someone who has a different way
						that it's better than the usual way and we can recommend while
						improving each other.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
