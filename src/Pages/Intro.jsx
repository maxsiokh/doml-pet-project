import React from 'react'
import MainButton from '../Components/Button/MainButton'

export default function Intro() {
	return (
		<div className='flex items-center justify-between pt-10'>
			<div
				id='intro__text'
				className='flex-col-reverse text-7xl leading-[1.3] text-left'
			>
				<h1 className=' bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300 bg-clip-text text-transparent'>
					AI Marketing.
				</h1>
				<h1 className=''>Optimized Reach.</h1>
				<p className='text-2xl font-extralight'>
					Our vision is to revolutionize the way brands and advertisers target,
					reach
				</p>
				<MainButton  text='Get started' />
			</div>

			<img src='planeta.png' className='' alt='' />
		</div>
	)
}
