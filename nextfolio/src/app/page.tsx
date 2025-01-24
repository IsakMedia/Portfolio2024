import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/navigation/Nav'
import Window from './components/window/Window'
import CTAbutton from './components/CtaButton/CTAbutton'
import Cardbox from './components/cardbox/Cardbox'
import { fetchLifeSpan, setMyAge } from './utils/helpers'

export default async function Home() {
	const lifedata = await fetchLifeSpan()
	const lifespan = lifedata.data[0].values[0]
	const age = setMyAge()

	return (
		<main className=''>
			<Nav />
			<Window heading={'about'}>
				<h3>feeling curious?</h3>

				<p>
					Hello I am Isak and i'm {age}, which means i have about{' '}
					<span title='https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__BE__BE0101__BE0101I/LivslangdEttariga/table/tableViewLayout1/'>
						{lifespan - age}
					</span>{' '}
					years left to learn
				</p>
				<p>
					Talk to me professionally about UX design, SCSS, and accessibility,
					AI, and animation. AR/VR would be super cool to work on someday too.
					<br />
					Talk to me personally about movies, skateboarding, animation, new
					technology, and the future.
				</p>
				<CTAbutton text='contact' href='mailto:isak.westerberg@gmail.com' />
			</Window>
			<Window heading='Quick facts'>
				{/* look into how you can make this cleaner, and only set about__about-container to parent/wrap them in a div, if there are at least one sibling */}
				<div className='about__about-container'>
					<Cardbox backgroundColor='#d8d8d8'>
						<Image
							alt='image of isak'
							src='/isak.png'
							width={300}
							height={200}
						/>
					</Cardbox>

					<Cardbox>
						<ul>
							<li>Name: Isak</li>
							<li>Status: Broke</li>
							<li>Age:{age}</li>
							<li>Location:Malmö</li>
						</ul>
					</Cardbox>
				</div>
			</Window>
			<Window heading='Quick facts'>
				<h3>heres some pictures ive made</h3>
				<Cardbox>
					<p>this has no siblings but a frame</p>
				</Cardbox>
				<Cardbox>
					<Image
						src='/test-img.png'
						width={400}
						height={400}
						style={{ objectFit: 'contain' }}
						alt='bee'
					/>
				</Cardbox>
			</Window>
		</main>
	)
}
