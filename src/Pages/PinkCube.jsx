import React from 'react'
import MainButton from '../Components/Button/MainButton'
import Line from '../Components/Line/Line'
export default function PinkCube() {
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

				<p className='text-xl font-extralight w-2/3'>
					DOML is a digital media agency powered by AI technology providing real
					time, data-driven insights on your business and audience. The mission
					of DOML is to create the best experiences for companies through
					intelligent insights, powerful analytics and strategic execution.
				</p>
				<Line />
				<MainButton text='Learn more' />
			</div>

			<img src='pinkcube.png' className='max-w-96' alt='' />
		</div>
	)
}
