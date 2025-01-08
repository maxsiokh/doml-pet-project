import React from 'react'
import MainButton from '../Components/Button/MainButton'
import Line from '../Components/Line/Line'

export default function About() {
	return (
		<div className='flex items-center justify-between pt-10'>
			<img src='about.png' className='' alt='' />
			<div className='flex-col-reverse text-7xl leading-[1.3] text-left space-y-11'>
				<div>
					<h1 className=' bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300 bg-clip-text text-transparent'>
						AI Marketing.
					</h1>
					<h1 className=''>Optimized Reach.</h1>
				</div>

				<p className='text-xl font-extralight w-2/3'>
					It's all about getting your message in front of the right audience and
					creating those valuable relationships. Learn More about how DOML can
					help you do just that - all with a simple, easy-to-use platform.
				</p>
				<Line />
				<MainButton text='Learn more' />
			</div>
		</div>
	)
}
