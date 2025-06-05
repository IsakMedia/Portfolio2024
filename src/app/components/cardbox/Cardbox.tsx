import React, { ReactNode } from 'react'
import './cardbox.scss'

type Props = {
	children: ReactNode
	backgroundColor?: string
}

/**
 * A container card component. Requires `children` and an optional backgroundColor.
 *
 * @param children The content inside the card
 * @param backgroundColor The background color (as a string, e.g. "#fff" or "red")
 */

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
