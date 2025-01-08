import React from 'react'
import MainButton from '../Components/Button/MainButton.jsx'

export default function Mail() {
	return (
		<div>
			<div className='flex px-20 pt-24 pb-28 items-center rounded-3xl inset-0 rounded-full bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300'>
				<img className='max-w-96' src='7.png' alt='' />
				<div id='text' className='text-left space-x-3 space-y-7 '>
					<h1 className='text-5xl'>Get exponential reach via AI Marketing</h1>

					<input
						type='email'
						placeholder='Enter your work email'
						className=' px-6 py-3 text-white placeholder-white bg-black/50 backdrop-blur-md rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300'
					/>

					<MainButton text={'Get in touch'} />
				</div>
			</div>
		</div>
	)
}
