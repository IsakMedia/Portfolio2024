import React from 'react'
import { ReactNode } from 'react'
import './window.scss'
import Link from 'next/link'

type WindowProps = {
	heading: string
	children: ReactNode
}

const Window = ({ heading, children }: WindowProps) => {
	return (
		<div>
			<div className='window'>
				<div className='window__header'>
					<div className='btn-border-wrapper'>
						<button
							id='close-btn'
							className='window__header__btn window__header__btn--close'
						></button>
					</div>
					<div className='window__header__line-box'>
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
					</div>
					<h2>{heading}</h2>

					<div className='window__header__line-box'>
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
						<hr className='line-box__line' />
					</div>
					<div className='btn-border-wrapper'>
						<button
							id='expand-btn'
							className='window__header__btn window__header__btn--expand'
						></button>
					</div>
				</div>

				<div className='window__body'>{children}</div>
			</div>
		</div>
	)
}

export default Window
