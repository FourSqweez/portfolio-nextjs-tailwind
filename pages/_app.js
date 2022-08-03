import '../styles/globals.css'
import Navbar from './../components/Navbar'
import { useRouter } from 'next/router'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
	size: 3,
	color: '#F692B2',
	className: 'z-50',
	delay: 80,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	return (
		<>
			{router && router.pathname !== '/404' && <Navbar />}
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
