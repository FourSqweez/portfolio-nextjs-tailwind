import Image from 'next/image'
import React from 'react'
import { getAllProjects } from '../../components/lib/helper'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

export default function Detail({ project }) {
	return (
		<div className="w-full">
			{project &&
				project.map((p) => (
					<>
						<div className="w-screen h-[50vh] relative">
							<div className="back-drop h-[50vh] absolute" />
							<div key={p.url} className="w-screen h-[50vh] relative">
								<Image
									className="absolute z-1"
									layout="fill"
									objectFit="cover"
									src={p.image}
									alt="/"
								/>
								<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
									<h2 className="py-2">{p.title}</h2>
									{p.tech.map((t, index) => (
										<h3 className="inline" key={t}>
											{(index ? ' / ' : '') + t}
										</h3>
									))}
								</div>
							</div>
						</div>
					</>
				))}

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-5">
				{project &&
					project.map((p) => (
						<>
							<div className="col-span-4">
								<p>Project</p>
								<h2>Overview</h2>
								<p className="mt-10 mb-5">
									bla bla bla เหมือนจะยังทำไม่ทัน
									ไม่ค่อยเก่งการเขียนอิ้งซะเท่าไหร่ ฮ่า ๆ แต่มี github
									กับ Demo นะ ๆ 😂🙏
								</p>
								<a href={p.urlGithub} target="_blank" rel="noreferrer">
									<button className="px-8 py-2 mt-4 mr-8">Code</button>
								</a>
								<a href={p.urlDemo} target="_blank" rel="noreferrer">
									<button className="px-8 py-2 mt-4">Demo</button>
								</a>
							</div>
							<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
								<div className="p-2">
									<p className="text-center font-bold pb-2">
										Technologies
									</p>
									<div className="grid grid-cols-3 md:grid-cols-1 ">
										{p.tech.map((t) => (
											<p key={t} className="text-gray-600 py-2 flex items-center">
												<RiRadioButtonFill className="pr-1" />
												{t}
											</p>
										))}
									</div>
								</div>
							</div>
							<Link href="/#projects">
								<p className="underline cursor-pointer">Back</p>
							</Link>
						</>
					))}
			</div>
		</div>
	)
}

export const getStaticProps = async ({ params }) => {
	//console.log('Params : ', params)
	//console.info('Slug Id :', params.slug)
	const project = getAllProjects(params.slug)

	return { props: { project } }
}

export const getStaticPaths = async () => {
	// Get all array from function getAllProject()
	const projects = await getAllProjects()

	// Get the paths we want to pre-render based on projects
	const paths = projects.map((p) => ({
		params: { slug: p.url.toString() },
	}))
	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {
		paths,
		fallback: false,
	}
}
