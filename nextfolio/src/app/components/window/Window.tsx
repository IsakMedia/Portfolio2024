import React from 'react'
import './window.scss'

type WindowProps = {
	heading: string
}

const Window = ({ heading }: WindowProps) => {
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

				<div className='window__body'>
					<h3>
						<slot name='subheading'>h3 with slotname 'subheading'</slot>
					</h3>
					<slot name='lead'>paragraph with slotname 'lead'</slot>
					<p>
						<slot name='paragraph'>paragraph with slotname 'paragraph'</slot>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Window
