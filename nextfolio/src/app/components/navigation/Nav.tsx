import React from 'react'
import './nav.scss'
import Image from 'next/image'

type Props = {}

const Nav = (props: Props) => {
	return (
		<header>
			<nav className='main-nav'>
				<div className='left-nav'>
					<a href='https://github.com/IsakMedia' target='_blank'>
						<Image
							alt='github logo'
							src='/github-mark/github-mark.svg'
							width={40}
							height={40}
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
					<span id='clock'>00:00</span>
				</div>
			</nav>
		</header>
	)
}

export default Nav
