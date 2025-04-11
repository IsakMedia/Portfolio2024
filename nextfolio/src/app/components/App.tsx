'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './navigation/Nav'
import Window from './window/Window'
import CTAbutton from './CtaButton/CTAbutton'
import Cardbox from './cardbox/Cardbox'
import { useState, useEffect } from 'react'

type AProps = {
	age: number
	lifespan: number
}

const App = ({ age, lifespan }: AProps) => {
	const [windows, setWindows] = useState<{ id: string; title: string }[]>([
		{ id: 'info', title: 'Info' },
		{ id: 'about', title: 'About' },
		{ id: 'portfolio', title: 'Portfolio' },
	])

	const [openWindows, setOpenWindows] = useState<string[]>(
		windows.map((w) => w.id)
	)

	const closeWindow = (id: string) => {
		setOpenWindows((prev) => prev.filter((w) => w !== id))
	}

	const openWindow = (id: string) => {
		setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]))
	}

	return (
		<>
			{/* <Nav /> */}
			{/* <Nav windows={windows} openWindow={openWindow} /> */}

			<Window heading={'about'} onClose={() => closeWindow('about')}>
				<h3>feeling curious?</h3>

				<p>
					Hello I am Isak and i'm {age}, which means i have about{' '}
					<span title='https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__BE__BE0101__BE0101I/LivslangdEttariga/table/tableViewLayout1/'>
						{lifespan - age}
					</span>{' '}
					years left to learn
				</p>
				<p className='info-p'>
					- Talk to me professionally about UX design, SCSS, and accessibility,
					AI, and animation. AR/VR would be super cool to work on someday too.
					<br />- Talk to me personally about movies, skateboarding, animation,
					new technology, and the future.
				</p>
				<CTAbutton text='contact' href='mailto:isak.westerberg@gmail.com' />
			</Window>
			<Window heading='Quick facts' onClose={() => closeWindow('about')}>
				{/* look into how you can make this cleaner, and only set about__about-container to parent/wrap them in a div, if there are at least one sibling */}

				<Cardbox backgroundColor='#d8d8d8'>
					<Image alt='image of isak' src='/isak.png' width={300} height={200} />
				</Cardbox>

				<Cardbox>
					<ul>
						<li>Name: Isak</li>
						<li>Status: Broke</li>
						<li>Age:{age}</li>
						<li>Location:Malmö</li>
					</ul>
				</Cardbox>
			</Window>

			<Window heading='Quick facts' onClose={() => console.log('hello')}>
				<h3>heres some pictures ive made</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni
					at repellendus, dolorem inventore deleniti illo sit sunt omnis laborum
					distinctio magnam! Voluptates distinctio debitis quidem rerum autem
					quam soluta. Esse sed dolores perspiciatis delectus ut exercitationem
					sequi? Eius et est at error magni sunt consequuntur, ad aut expedita
					quauidem, sapiente iure repellendus perferendis impedit at officiis
					earum voluptatem temporibus optio quisquam molestiae, ut minus minima
					consectetur? Reiciendis magni aut at tempora, inventore ut incidunt
					vitae quod error. Velit. Accusantium aut cupiditate excepturi,
					temporibus deleniti laudantium illum iusto hic praesentium esse at
					iure mollitia corporis tenetur a dolores dignissimos saepe ea odio!
					Deserunt dolore voluptatibus ipsam libero recusandae earum.
				</p>
				<Cardbox>
					<p>this is siblings but in cardbox</p>
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
		</>
	)
}

export default App
