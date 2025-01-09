import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CircleIcon from '@mui/icons-material/Circle'
import React, { useState } from 'react'
export default function Reviews() {
	const testimonials = [
		{
			id: 1,
			name: 'Emily Carter',
			position: 'Digital Marketing Specialist',
			text: 'Empowering brands to reach their full potential through data-driven strategies. With DOML, creating lasting connections with your audience has never been easier.',
			avatar: 'revis.png', // Тут можеш додати шлях до фото
		},
		{
			id: 2,
			name: 'Sophia Martinez',
			position: 'Creative Director',
			text: "It's all about bringing ideas to life. DOML has been my go-to platform for designing marketing campaigns that truly resonate with the audience.",
			avatar: 'revis-2.png', // Фото
		},
		{
			id: 3,
			name: 'Olivia Thompson',
			position: 'Brand Strategist',
			text: "Understanding the audience is key to building a strong brand. DOML's tools make it simple to analyze, strategize, and execute campaigns with precision.",
			avatar: 'revis-3.png', // Фото
		},
		{
			id: 4,
			name: 'Lila Nguyen',
			position: 'Social Media Manager',
			text: 'Social media is where connections are made, and DOML helps me stay ahead of the trends. Simplifying complex workflows so I can focus on what matters most.',
			avatar: 'revis-4.png', // Фото
		},
	]
	const [index, setIndex] = useState(1)
	const currentTestimonial = testimonials[index]
	const handlePrev = () => {
		setIndex(prevIndex =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		)
	}
	const handleNext = () => {
		setIndex(prevIndex =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		)
	}

	return (
		<div className='inset-0 rounded-3xl bg-gradient-to-r from-pink-600 via-[#5200FF] to-cyan-300'>
			<div className='flex px-20 pt-24 items-center  '>
				<div className='space-x-1'>
					{/* {currentTestimonial.map(item => ( */}
					<div className='flex'>
						<img
							className='w-1/4 h-1/4'
							src={currentTestimonial.avatar}
							alt=''
						/>
						<div id='text' className='text-left space-y-4  '>
							<p className='text-xl font-semibold leading-10 '>
								{currentTestimonial.text}
							</p>
							<h3 className='text-2xl font-bold ' key={currentTestimonial.id}>
								{currentTestimonial.name}
							</h3>
							<p className='text-xl font-light'>
								{currentTestimonial.position}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className='flex justify-center space-x-8 pb-10'>
					<ArrowBackIcon onClick={handlePrev} className='cursor-pointer' />
					<div className='space-x-5 text-xs'>
						{testimonials.map((_, i) => (
							<CircleIcon
								key={i}
								className={`w-2 h-2 rounded-full ${
									index === i ? 'text-white' : 'text-slate-950 '
								}`}
								onClick={() => setIndex(i)} // При натисканні встановлюємо індекс />
							/>
						))}
					</div>
					<ArrowForwardIcon onClick={handleNext} className='cursor-pointer' />
				</div>
			</div>
		</div>
	)
}
