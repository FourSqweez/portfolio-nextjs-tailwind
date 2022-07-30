import Image from 'next/image'
import React from 'react'
import MoviesImg from '../public/movies.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Movies = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={MoviesImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Movies Hub</h2>
					<h3>React JS / Material UI / Axios</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						bla bla bla เหมือนจะยังทำไม่ทัน
						ไม่ค่อยเก่งการเขียนอิ้งซะเท่าไหร่ ฮ๋า ๆ แต่มี github กับ Demo
						นะ ๆ 😂🙏
					</p>
					<a
						href="https://github.com/FourSqweez/movie-tv-material-ui"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://movie-tv-material-ui.vercel.app/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> React JS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Axios
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	)
}

export default Movies
