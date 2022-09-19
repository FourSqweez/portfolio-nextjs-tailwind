export const data = {
	main: {
		name: 'Jeerasak Krueaniam',
		nickName: 'Four',
		occupation: 'Front-end Devloper',
		description: 'I eat, sleep and breathe React',
		image: 'profilepic.jpg',
		about: 'bla bla',
		bio: 'Hi there! I am Four',
		email: 'kjeerasak@kkumail.com',
		phone: '+66837543842',
		address: {
			street: '123 Dev Lane',
			city: 'London',
			state: 'Devosphere',
			zip: 'W3B D3V',
		},
		website: 'https://foursqweez-portfolio.netlify.app/',
		resumedownload: '',
		social: [
			{
				name: 'linkedin',
				url: 'https://www.linkedin.com/in/jeerasak-krueanaim-5a2289208/',
				className: 'fa fa-linkedin',
				iconName: 'FaLinkedinIn',
			},
			{
				name: 'mail',
				url: 'mailto:kjeerasak@kkumail.com',
				className: 'fa fa-instagram',
				iconName: 'AiOutlineMail',
			},
			{
				name: 'github',
				url: 'https://github.com/FourSqweez',
				className: 'fa fa-github',
				iconName: 'FaGithub',
			},
			{
				name: 'notion',
				url: 'https://github.com/FourSqweez',
				className: 'fa fa-notion',
				iconName: 'SiNotion',
			},
		],
	},
	resume: {
		skillmessage: 'My Programming Language Proficiency',
		education: [
			{
				school: 'Khon Kean University',
				degree: "Bachelor's Degree, Computer Science",
				graduated: 'July 2020',
				description: '',
			},
		],
		work: [
			{
				company: 'Test',
				title: '',
				years: 'May 2019 - Present',
				description: '',
			},
		],
		skills: [
			{
				name: 'JavaScript',
				level: '99%',
				img: '/assets/skills/javascript.png',
			},
			{
				name: 'HTML',
				level: '95%',
				img: '/assets/skills/html.png',
			},
			{
				name: 'CSS',
				level: '95%',
				img: '/assets/skills/css.png',
			},
			{
				name: 'ReactJs',
				level: '100%',
				img: '/assets/skills/react.png',
			},
			{
				name: 'Next JS',
				level: '85%',
				img: '/assets/skills/nextjs.png',
			},
			{
				name: 'Node JS',
				level: '95%',
				img: '/assets/skills/node.png',
			},
			{
				name: 'Tailwind CSS',
				level: '95%',
				img: '/assets/skills/tailwind.png',
			},
			{
				name: 'Firebase',
				level: '95%',
				img: '/assets/skills/firebase.png',
			},
			{
				name: 'Git',
				level: '70%',
				img: '/assets/skills/github1.png',
			},
		],
	},
	portfolio: {
		projects: [
			{
				project_id: '1',
				title: 'Movie Hub',
				tech: ['React JS', 'Axios', 'Styled-Components', 'Material-UI'],
				category: '',
				description:
					'This project is a website that showing movies from movies api and you can see a lot of movies and you can filter movies from the tag of genre. If you clicked on the movies cards it will show the description and actors',
				image: '/images/movies.jpg',
				urlDemo: 'https://movie-tv-material-ui.vercel.app/',
				urlGithub: 'https://github.com/FourSqweez/movie-tv-material-ui',
				url: 'movies',
			},
			{
				project_id: '2',
				title: 'Tesla Clone',
				tech: ['React JS', 'Redux', 'Styled-Components'],
				category: '',
				description:
					'This project is a website about tesla clone that I try too clone the tesla website UI. It has smooth scroll and responsive UI ',
				image: '/images/tesla.jpg',
				urlDemo:
					'https://react-tesla-clone-redux-styled-components.vercel.app/',
				urlGithub:
					'https://github.com/FourSqweez/react-tesla-clone-redux-styled-components',
				url: 'tesla',
			},
			{
				project_id: '4',
				title: 'Amazon Clone',
				tech: ['Next JS', 'Redux', 'Tailwind'],
				category: '',
				description:
					'This project is a website about Amazon Clone that I try to clone the website ui. In this website you can add the products to cart and make payment wite fake data',
				image: '/images/amazon.jpg',
				urlDemo:
					'https://nextjs-amazon-clone-tailwind-redux-firebase.vercel.app/',
				urlGithub:
					'https://github.com/FourSqweez/nextjs-amazon-clone-tailwind-redux-nextAuth',
				url: 'amazon',
			},
			{
				project_id: '5',
				title: 'Air bnb Clone',
				tech: ['Next JS', 'Tailwind'],
				category: '',
				description:
					'This project is a website about Air bnb Clone that I try to clone the website UI. You can use the search to find some of the place that you want to see',
				image: '/images/airbnb.jpg',
				urlDemo: 'https://airbnb-nextjs-tailwind-mapbox.vercel.app/',
				urlGithub:
					'https://github.com/FourSqweez/airbnb-nextjs-tailwind-mapbox',
				url: 'airbnb',
			},
			{
				project_id: '6',
				title: 'POD books store',
				tech: ['Next JS', 'Tailwind', 'Redux'],
				category: '',
				description:
					'This website is a POD website that sale the books and it can add the books to cart and calculate price and promotion and then if you clicked to checkout it will showing you the bill after calculate with the promotions',
				image: '/images/pod-book-store.jpg',
				urlDemo: 'https://pod-bookstore-nextjs-tailwind-redux.vercel.app/',
				urlGithub:
					'https://github.com/FourSqweez/pod-bookstore-nextjs-tailwind-redux',
				url: 'pod-book-store',
			},
		],
	},
	testimonials: {
		testimonials: [
			{
				text: '',
				user: '',
			},
			{
				text: '',
				user: '',
			},
		],
	},
}
