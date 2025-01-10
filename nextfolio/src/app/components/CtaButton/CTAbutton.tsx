import React from 'react'
import './ctabutton.scss'

type CtaProps = {
	href: string
	text: string
}

const CTAbutton = ({ text, href }: CtaProps) => {
	return (
		<div className='flex'>
			<a href={href}>
				<button className='about__info-box__btn'>{text}</button>
			</a>
		</div>
	)
}

export default CTAbutton
