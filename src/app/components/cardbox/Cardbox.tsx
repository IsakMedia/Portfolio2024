import React, { ReactNode } from 'react'
import './cardbox.scss'

type Props = {
	children: ReactNode
	backgroundColor?: string
}

const Cardbox = ({ children, backgroundColor }: Props) => {
	const cardStyle = { backgroundColor }

	return (
		// <div className='about__about-container'>
		<div className='about__box' style={cardStyle}>
			{children}
		</div>
		// </div>
	)
}

export default Cardbox
