import React from 'react'
import MainButton from '../../Components/Button/MainButton'
import Line from '../../Components/Line/Line'
import TitleSection from './TitleSection'

export default function Section({ text, srcImg, reverse }) {
	return (
		<div
			className={`flex items-center justify-between ${
				reverse ? 'flex-row-reverse' : 'flex-row'
			} `}
		>
			<div
				id='intro__text'
				className='text-7xl leading-[1.3] text-left space-y-11'
			>
				<TitleSection title={'AI Marketing.'} subtitle={'Optimized Reach.'} />
				<p className='text-2xl font-extralight'>{text}</p>
				<Line />

				<MainButton text='Get started' />
			</div>

			<img src={srcImg} className='max-w-96' alt='' />
		</div>
	)
}
