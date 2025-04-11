'use client'

import React from 'react'
import { ReactNode } from 'react'
import './window.scss'
import Link from 'next/link'

type WindowProps = {
	heading: string
	children: ReactNode
	onClose: () => void
}

const Window = ({ heading, children, onClose }: WindowProps) => {
	// fungerar men används ej
	const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const windowEl = e.currentTarget.closest('.window')
		if (windowEl) {
			windowEl.classList.add('d-none')
		}
	}

	return (
		<div>
			<div className='window'>
				<div className='window__header'>
					<div className='btn-border-wrapper'>
						<button
							onClick={onClose}
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

				<div className='window__body'>
					<div className='window__body__children'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Window
