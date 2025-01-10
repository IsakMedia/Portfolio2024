import React from 'react'
import './cardbox.scss'
import CTAbutton from '../CtaButton/CTAbutton'

type Props = {
	list: string
	cta: () => void
	url: string
}

const Cardbox = (props: Props) => {
	return (
		<>
			<div className='about__box'>
				<li></li>
				<div></div>
				<div></div>
				<CTAbutton text='hello' href='http://google.com' />
			</div>
		</>
	)
}

export default Cardbox
