// pages/404.js
import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import Image from 'next/image'
import Img404 from '../public/images/404.jpg'

export default function Custom404() {
	return (
		<div className="w-full">
			<Image
				className="rounded-xl group-hover:opacity-10"
				src={Img404}
				alt="404 page"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>

			<div className="p-10 items-center flex h-[100vh] relative z-1">
				<div className="flex flex-col items-center">
					<h2 className="text-lg sm:text-4xl text-amber-800">
						Oops!...Page Not Found!
					</h2>
					<Link href="/">
						<button
							className="
				btn-primary w-20 sm:w-40 mt-5 from-[#fb923c] to-[#92400e]"
						>
							<IoArrowBack className="text-sm sm:text-xl" />
							<p className="ml-2 underline cursor-pointer sm:text-xl">
								Back
							</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
