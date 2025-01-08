import React from 'react'
import MainButton from '../Components/Button/MainButton'
import Line from '../Components/Line/Line'

export default function Intro() {
	return (
		<div className='flex items-center justify-between '>
			<div
				id='intro__text'
				className='flex-col-reverse text-7xl leading-[1.3] text-left space-y-11'
			>
				<div>
					<h1 className=' bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300 bg-clip-text text-transparent'>
						AI Marketing.
					</h1>
					<h1 className=''>Optimized Reach.</h1>
				</div>

				<p className='text-2xl font-extralight'>
					Our vision is to revolutionize the way brands and advertisers target,
					reach
				</p>
				<Line />
				<MainButton text='Get started' />
			</div>

			<img src='planeta.png' className='' alt='' />
		</div>
	)
}
