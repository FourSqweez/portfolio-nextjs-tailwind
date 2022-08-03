// pages/404.js
import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import Image from 'next/image'
import Img404 from '../public/images/404.jpg'

export default function Custom404() {
	return (
		<div className="w-full">
			<Image
				className="rounded-xl h-full group-hover:opacity-10"
				src={Img404}
				alt="404 page"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>

			<div className="p-10 items-center justify-center lg:justify-start flex h-[100vh] relative z-1">
				<div className="flex flex-col items-center">
					<h2
						className="text-xl text-green-400 bg-black/50 p-2 rounded-xl sm:text-4xl 
					lg:bg-white/50 lg:text-amber-800"
					>
						Oops!...Page Not Found!
					</h2>
					<Link href="/">
						<button
							className="
				btn-primary w-35 sm:w-40 mt-5 from-[#fb923c] to-[#92400e]"
						>
							<IoArrowBack className="text-xl sm:text-xl" />
							<p className="ml-2 underline cursor-pointer text-xl">
								Back
							</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
