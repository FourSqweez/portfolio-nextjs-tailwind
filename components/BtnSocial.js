import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { SiNotion } from 'react-icons/si'

const btnComponents = [
	{
		icon: <FaLinkedinIn />,
		link: 'https://www.linkedin.com/in/jeerasak-krueanaim-5a2289208/',
	},
	{ icon: <FaGithub />, link: 'https://github.com/FourSqweez' },
	{ icon: <AiOutlineMail />, link: 'mailto:kjeerasak@kkumail.com' },
	{ icon: <BsFacebook />, link: 'https://www.facebook.com/foursqweez' },
	{
		icon: <SiNotion />,
		link: 'https://moored-kettle-0b0.notion.site/Fullstack-Developer-2ed4c3301c734eea96cafca884eab5b1',
	},
]

const BtnSocial = () => {
	return (
		<div className="flex items-center justify-around max-w-sm m-auto pt-4 wrap">
			{btnComponents &&
				btnComponents.map((btnComponent) => (
					<a
						key={btnComponent.link}
						href={btnComponent.link}
						target="_blank"
						rel="/"
					>
						<div className="btn-primary hover:scale-110 p-4 sm:p-6">
							{btnComponent.icon}
						</div>
					</a>
				))}
		</div>
	)
}

export default BtnSocial
