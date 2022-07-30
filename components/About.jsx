import React from 'react'

const About = () => {
	return (
		<div id='about' className="w-full md:h-screen px-10 items-center py-16">
			<div className="max-w-5xl m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>// I am not your nor mal developer</p>
					<p className='py-2 text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
						officiis libero sunt, eius voluptatem eos facilis deserunt
						quasi odit sed obcaecati mollitia repellat animi culpa qui?
						Illum excepturi quam similique?
					</p>
					<p className='py-2 text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quaerat, alias autem animi sint, consequuntur eos non
						dignissimos in esse tenetur ea! Corrupti impedit numquam vero
						voluptatem dicta maxime fugiat necessitatibus eaque illo
						beatae debitis cumque eos obcaecati nemo, voluptatibus esse.
					</p>
					<p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 p-4 ease-in duration-300'>
					<img className='rounded-xl'
						src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
						alt="test"
					/>
				</div>
			</div>
		</div>
	)
}

export default About
