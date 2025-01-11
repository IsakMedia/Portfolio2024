'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import './nav.scss'
import Image from 'next/image'

type Props = {}

const Nav = (props: Props) => {
	const [time, setTime] = useState<string>('')

	useEffect(() => {
		const displayClock = () => {
			const date = new Date()
			return date.toLocaleTimeString('sv-SE', {
				hour: '2-digit',
				minute: '2-digit',
			})
		}

		// Sätt initial tid
		setTime(displayClock())

		// Uppdatera tiden varje sekund
		const interval = setInterval(() => {
			setTime(displayClock())
		}, 1000)

		// Rensa intervallet när komponenten avmonteras
		return () => clearInterval(interval)
	}, [])

	return (
		<header>
			<nav className='main-nav'>
				<div className='left-nav'>
					<a href='https://github.com/IsakMedia' target='_blank'>
						<Image
							alt='github logo'
							src='/github-mark/github-mark.svg'
							width={35}
							height={35}
						/>
					</a>
					<ul>
						<a href=''>
							<li data-name='first'>info</li>
						</a>
						<a href=''>
							<li data-name='second'>about</li>
						</a>
						<a href=''>
							<li data-name='third'>portfolio</li>
						</a>
					</ul>
				</div>
				<div className='right-nav'>
					<span id='clock'>{time}</span>
				</div>
			</nav>
		</header>
	)
}

export default Nav
