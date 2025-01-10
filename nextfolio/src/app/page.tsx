import Image from 'next/image'
import Nav from './components/navigation/Nav'
import Window from './components/window/Window'
import CTAbutton from './components/CtaButton/CTAbutton'

export default function Home() {
	return (
		<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
			<Nav />
			<Window heading='about' />
			<CTAbutton text='hello' href='google.com' />
		</main>
	)
}
