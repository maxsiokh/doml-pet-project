import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import React from 'react'

export default function GradientBorderButton({ text }) {
	return (
		<button className=' relative px-6 py-3 text-white font-medium rounded-full overflow-hidden group '>
			{/* Градієнтна рамка */}
			<span className='absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300'></span>
			{/* Внутрішній фон */}
			<span className='absolute inset-[2px] bg-black rounded-full'></span>
			{/* Контент */}
			<span className='relative flex items-center space-x-2'>
				<span className='text-xl font-extralight'>{text}</span>
				<ArrowForwardIcon
					style={{
						fontSize: 25,
					}}
				/>
			</span>
		</button>
	)
}
